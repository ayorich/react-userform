import { put, take, takeEvery, fork } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { updateUser, actionTypes } from '../actions';
import firebase from '../config/fbconfig'


const database = firebase.database();
const urlPostUsers = 'https://us-central1-userformapi.cloudfunctions.net/entries';


//POST API
function* postingDataApi({user}) {
    console.log(user);
    const response = yield fetch(urlPostUsers, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            firstname: user.firstname,
            lastname: user.lastname,
            birthday: user.birthday,
            age: user.age,
            hobby: user.hobby
        })
    });
    console.log(response)
    console.log(response.status)
    console.log(`response = ${JSON.stringify(response)}`)
    return yield (response.status === 200);
}

function* updatedItemSaga() {
    // #1
    const channel =  eventChannel(emiter => {
        const listener = database.ref("entries").on("value", snapshot => {
             emiter(snapshot.val());
            // emiter({ data: data.val() || {} });
        });

        // #2
        return () => {
            listener.off();
        };
    });

    // #3
    while (true) {
        const item  = yield take(channel);
        // #4
    yield put(updateUser(item));
    }
}

// function createEventChannel() {
//     const listener = eventChannel(
//         emit => {
//             database.ref('entries')
//                 .on('value', data => emit(data.val()));
//             return () => database.ref('entries').off(listener);
//         }
//     );

//     return listener;
// };

// function* updatedItemSaga() {
//     const updateChannel = createEventChannel();
//     while (true) {
//         const item = yield take(updateChannel);
//         yield put(updateUser(item));
//     }
// }

function* watchPostUser() {
    yield takeEvery(actionTypes.SUBMIT_REQUEST, postingDataApi);
}


export default function* rootSaga() {
    yield fork(watchPostUser);
    yield fork(updatedItemSaga);

}
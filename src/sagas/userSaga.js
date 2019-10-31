import { put, take, takeEvery, fork } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { updateUser, actionTypes } from '../actions';
import firebase from '../config/fbconfig'


const database = firebase.database();
const urlPostUsers = 'https://us-central1-userformapi.cloudfunctions.net/entries';


//POST API
function* postingDataApi({user}) {
    // console.log(user);
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
    // console.log(response)
    // console.log(response.status)
    // console.log(`response = ${JSON.stringify(response)}`)
    return yield (response.status === 200);
}

function* updatedItemSaga() {
    // #1
    const channel = new eventChannel(emiter => {
        const listener = database.ref("entries").on("value", snapshot => {
            snapshot.forEach(childSnapshot => {
                emiter(childSnapshot.val());
            })
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


function* watchPostUser() {
    yield takeEvery(actionTypes.SUBMIT_REQUEST, postingDataApi);
}


export default function* rootSaga() {
    yield fork(watchPostUser);
    yield fork(updatedItemSaga);

}



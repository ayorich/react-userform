import { put, take, call, fork } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { updateUser, actionTypes } from '../actions';
import firebase from '../config/fbconfig'


const database = firebase.database();

function insert(item) {
    const newItemRef = database.ref('entries').push();
    return newItemRef.set(item);
}

function createEventChannel() {
    const listener = eventChannel(
        emit => {
            database.ref('entries')
                .on('child_added', data => emit(data.val()));
            return () => database.ref('entries').off(listener);
        }
    );

    return listener;
};

function* updatedItemSaga() {
    const updateChannel = createEventChannel();
    while (true) {
        const item = yield take(updateChannel);
        yield put(updateUser(item));
    }
}
function* createItemSaga() {
    const action = yield take(actionTypes.SUBMIT_REQUEST);
    console.log(action);
    const item = action.user;
    console.log(item);
    try {
        yield call(insert, item);
    } catch (e) {
        // do something with the error, such as dispatching an error action with yield put
    }
}

export default function* rootSaga() {
    yield fork(createItemSaga);
    yield fork(updatedItemSaga);

}
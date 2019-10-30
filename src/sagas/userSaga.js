import { put, takeEvery, take  } from 'redux-saga/effects';
// import { eventChannel } from 'redux-saga';
import {Api} from './Api';
import { actionTypes } from '../actions';
import { eventChannel } from 'redux-saga';
import { fetchUsers } from '../actions';
import firebase from '../config/fbconfig'



function* addUser(action){
    console.log(action);
    try{
        const result = yield Api.postingDataApi(action.user);
        if(result){
            yield put({ type: actionTypes.USER_CREATED})
        }
    }catch(error){

    }
}

export function* startListener() {
    const database = firebase.database();
    // #1
    const channel = new eventChannel(emiter => {
        const listener = database.ref("entries").on("value", snapshot => {
            emiter({ data: snapshot.val() || {} });
        });

        // #2
        return () => {
            listener.off();
        };
    });
    console.log(channel);
    // #3
    while (true) {
        const data  = yield take(channel);
        console.log(data);
        // #4
        yield put(fetchUsers(data));
    }
}


export function* watchAddUser(){
    yield takeEvery(actionTypes.SUBMIT_REQUEST, addUser);
} 


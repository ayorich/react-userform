import {put, takeEvery} from 'redux-saga/effects';
import {Api} from './Api';
import { actionTypes } from '../actions';


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

export function* watchAddUser(){
    yield takeEvery(actionTypes.SUBMIT_REQUEST, addUser);
} 


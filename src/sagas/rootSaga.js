import {fork} from 'redux-saga/effects';

//ADD USER
import { watchAddUser } from './userSaga';

export default function* rootSaga(){
    yield fork(watchAddUser)
    
}

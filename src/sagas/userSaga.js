// import { put, takeEvery, take } from 'redux-saga/effects';
// // import { eventChannel } from 'redux-saga';
// import {Api} from './Api';
// import { actionTypes } from '../actions';
// import { eventChannel } from 'redux-saga';
// // import { fetchUsers } from '../actions';
// import firebase from '../config/fbconfig'


// // POST REQUEST
// function* addUser(action){
//     console.log(action);
//     try{
//         const result = yield Api.postingDataApi(action.user);
//         console.log(result);
//         if (result === true){
//             yield put({ type: actionTypes.FETCH_USERS})
//         }
//     }catch(error){

//     }
// }
// export function* watchAddUser() {
//     yield takeEvery(actionTypes.SUBMIT_REQUEST, addUser);
// } 






// export function* startListener() {
//     const database = firebase.database();
//     // #1
//     const channel = new eventChannel(emiter => {
//         const listener = database.ref("entries").on("value", snapshot => {
//             emiter({ data: snapshot.val() || {} });
//         });

//         // #2
//         return () => {
//             listener.off();
//         };
//     });
//     console.log(channel);
//     // #3
//     while (true || false) {
//         const {data}  = yield take(channel);
//         console.log(data);
//         // #4
//         yield put({ type: actionTypes.FETCH_SUCCEEDED, receivedUsers: data });
//     }
// }

// // export function* watchFetchUsers() {
// //     yield takeEvery(actionTypes.FETCH_USERS, startListener);
// // }


// // //GET REQUEST
// // function* fetchUserRequest() {
// //     try {
// //         console.log('i got here get')
// //         const receivedUsers = yield Api.getUsersFromApi();
// //         console.log(receivedUsers)
// //         yield put({ type: actionTypes.FETCH_SUCCEEDED, receivedUsers: receivedUsers });
// //     } catch (error) {
// //         yield put({ type: actionTypes.FETCH_FAILED, error });
// //     }
// // }
// // export function* watchFetchUsers() {
// //     yield takeEvery(actionTypes.FETCH_USERS, fetchUserRequest);
// // }




// // export function* startListener() {
// //     const database = firebase.database();
// //     // #1
// //     const channel = new eventChannel(emiter => {
// //         const listener = database.ref("entries").on("value", snapshot => {
// //             emiter({ data: snapshot.val() || {} });
// //         });

// //         // #2
// //         return () => {
// //             listener.off();
// //         };
// //     });
// //     console.log(channel);
// //     // #3
// //     while (true) {
// //         const data = yield take(channel);
// //         console.log(data);
// //         // #4
// //         yield put(fetchUsers(data));
// //     }
// // }


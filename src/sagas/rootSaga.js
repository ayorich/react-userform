// import {fork} from 'redux-saga/effects';
// //ADD USER
// import { startListener, watchAddUser } from './userSaga';
// // import { put, take } from 'redux-saga/effects';
// // import { eventChannel } from 'redux-saga';
// // import { fetchUsers } from '../actions';
// // import firebase from '../config/fbconfig'



// // const database = firebase.database();
// // function createEventChannel() {
// //     // #1: Creates an eventChannel and starts the listener;
// //     const listener = eventChannel(emiter => {
// //         database
// //             .ref('entries')
// //             .on('child_added', snapshot => {
// //                 emiter({ data: snapshot.val() || {} });
// //             });

// //         // #2: Return the shutdown method;
// //         return () => database.ref('entries').off(listener);
       
// //     });

    
// //     return listener;
// // }

// // function* startListener(){
// //     const updateChannel = createEventChannel();
// //     // #3: Creates a loops to keep the execution in memory;
// //     while (true) {
// //         const { data } = yield take(updateChannel);
// //         console.log(data)
// //         // #4: Pause the task until the channel emits a signal and dispatch an action in the store;
// //         yield put(fetchUsers(data));
// //     }
// // }
// export default function* rootSaga(){
//     // yield fork(watchFetchUsers)
//     yield fork(watchAddUser)
//     yield fork(startListener)
    
// }

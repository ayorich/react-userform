// KEPT FOR FUTURE REFERENCE ON GITHUB ........................
// ................................................................


// const urlPostUsers = 'https://us-central1-userformapi.cloudfunctions.net/entries';
// // const urlGetUsers = 'https://us-central1-userformapi.cloudfunctions.net/entries';


// //POST API
// function* postingDataApi (data){
//         // console.log(data);
//     const response = yield fetch(urlPostUsers, {
//         method: 'POST',
//         headers:{
//             Accept: 'application/json',
//             'content-type': 'application/json',
//         },
//         body:JSON.stringify({
//             firstname: data.firstname,
//             lastname: data.lastname,
//             birthday: data.birthday,
//             age: data.age,
//             hobby: data.hobby
//         })
//     });
//     console.log(response)
//     console.log(response.status)
//     console.log(`response = ${JSON.stringify(response)}`)
//     return yield (response.status === 200);
// }


// // function* getUsersFromApi() {
// //     console.log('am in getAPI')
// //     const response = yield fetch(urlPostUsers, {
// //         method: 'GET',
// //         headers: {
// //             Accept: 'application/json',
// //             // 'Content-Type': 'application/json',
// //         },
// //         // body: true,
// //     });
// //     console.log(response)
// //     // const users = yield response.status === 200 ? JSON.parse(response._bodyInit) : []
// //     // console.log(`from getAPI = ${users}`);
// //     console.log(`from getAPI = ${response}`);
// //     // return users;
// // }

// export const Api = {
//     postingDataApi,
//     // getUsersFromApi
// }
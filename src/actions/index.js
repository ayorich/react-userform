// ACTION CREATOR
//ALL ACTIONS DISPATCH AND CATCHED BY REDUCERS
export const actionTypes = {
    SUBMIT_REQUEST: "USER/POST",
    USER_CREATED: "USER/CREATED",
    FETCH_USERS: "USER/FETCH",
    FETCH_SUCCEEDED :'FETCH/SUCCEEDED',
    FETCH_FAILED :'FETCH/FAILED',
};

export const createUser= user => {
    console.log(user)
    return{
        type: actionTypes.SUBMIT_REQUEST,
        user
    }}
export const fetchUsers = (data) => {
    console.log(data);
    return {
        type: actionTypes.FETCH_USER,
        data
    }
}
//Action sent by Redux-saga
export const fetchSuccessAction = (receivedUsers) => {
    return {
        type: actionTypes.FETCH_SUCCEEDED,
        receivedUsers
    }
}

export const fetchFailedAction = (error) => {
    return {
        type: actionTypes.FETCH_FAILED,
        error
    }
}






// export const liveFeed = (state) => {
//     console.log(state);
//     //RETURN ACTION
//     return {
//         type: 'LIVE',
//         payload: state
//     };
// };

// export const submit = (details) => {
//     //RETURN ACTION
//     return {
//         type: 'SUBMIT_FORM',
//         payload: details
//     };
// };

// export const deleteDetail = key => {
    
//     return{
//         type: 'DELETE_DETAIL',
//         payload: key
//     }
// }

// export const handleSave = row => {
    
//     return{
//         type: 'EDIT_DETAIL',
//         payload: row
//     }
// }



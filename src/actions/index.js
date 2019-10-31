// ACTION CREATOR
//ALL ACTIONS DISPATCH AND CATCHED BY REDUCERS
export const actionTypes = {
    SUBMIT_REQUEST: "USER/POST",
    FETCH_SUCCEEDED :'FETCH/SUCCEEDED',
};
//Action sent from tablejs and intercepted by redux-saga
export const createUser= user => {
    // console.log(user)
    return{
        type: actionTypes.SUBMIT_REQUEST,
        user
    }}

//Action sent from Redux-saga
export const updateUser = (receivedUsers) => {
    // console.log(receivedUsers);
    return {
        type: actionTypes.FETCH_SUCCEEDED,
        receivedUsers
    }
}


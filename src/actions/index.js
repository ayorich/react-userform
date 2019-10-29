// ACTION CREATOR
//ALL ACTIONS DISPATCH AND CATCHED BY REDUCERS
export const actionTypes = {
    SUBMIT_REQUEST: "USER/POST",
    USER_CREATED: "USER/CREATED"
};

export const createUser= user => {
    console.log(user)
    return{
        type: actionTypes.SUBMIT_REQUEST,
        user
    }}

export const success= () => {
        return{
        type: actionTypes.success
    }}






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



import { combineReducers } from 'redux'

const userDetailsReducer = () =>{
    return [
        {
            key: 1,
            firstname: 'AYOELE',
            lastname: 'KAYODE',
            birthday: '10-10-2239',
            age: 25,
            hobby: 'GOLF',
        },
        {
            key: 2,
            firstname: 'AYODE',
            lastname: 'KAYODE',
            birthday: '10-10-2719',
            age: 25,
            hobby: 'GOLF',
        }
    ]
};
const submittedDetailsReducer = (userDetails = null , action ) => {
    if (action.type === 'SUBMIT_FORM'){
        return action.payload;
    }
    return userDetails;
}

export default combineReducers({
    userDetails : userDetailsReducer,
    submittedDetails : submittedDetailsReducer
})
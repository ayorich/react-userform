import { combineReducers } from 'redux';



const userDetailsReducer = (userDetails = null, action ) =>{
    if (action.type === 'SUBMIT_FORM') {
        const { firstname, lastname, birthday, age, hobby } = action.payload;
        return [{
            key: 1,
            firstname: firstname,
            lastname: lastname,
            birthday: birthday,
            age: age,
            hobby: hobby,
        }];
        
    }
    return userDetails;
};
const submittedDetailsReducer = (userDetails = null , action ) => {
    if (action.type === 'SU_FORM'){
        return action.payload;
    }
    return null;
}

export default combineReducers({
    userDetails : userDetailsReducer,
    submittedDetails : submittedDetailsReducer
})
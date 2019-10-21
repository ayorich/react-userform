import { combineReducers } from 'redux';


const userDetailsReducer = (userDetails = null, action ) =>{
    if (action.type === 'SUBMIT_FORM') {
        return action.payload;
        
    }
    return [{
        key: 0,
        firstname: 'dAYODELE',
        lastname: 'dKAYODE',
        birthday: '10-10-2019',
        age: 25,
        hobby: 'dsGOLF',
    }];
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
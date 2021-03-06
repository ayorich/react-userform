import { combineReducers } from 'redux';
import { actionTypes } from '../actions';



const userDetailsReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.FETCH_SUCCEEDED:
            const newData = action.receivedUsers;
            return [newData];
        default:
            return state; //state does not change
    }
}

export default combineReducers({
    userDetails: userDetailsReducer
})


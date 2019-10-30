import { combineReducers } from 'redux';
import { actionTypes } from '../actions';



const userDetailsReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.FETCH_SUCCEEDED:
            console.log(action.receivedUsers);
            const newData = action.receivedUsers;
            state = [...state, newData]
            return state;
            // return action.receivedUsers;
        case actionTypes.FETCH_FAILED:
            return [];
        default:
            return state; //state does not change
    }
}

export default combineReducers({
    userDetails: userDetailsReducer
})

//  const userDetailsReducer = (data= state , action) => {
//     // const { dataSource } = state;
//      console.log(state);
//      console.log(action.type);
//      console.log(action.data);
//      if (action.type === actionTypes.FETCH_USER) {
//           const newData = action.data;
//           state = [...data, newData];

//          return state
//      }

    // if (action.type === 'SUBMIT_FORM') {
    //     const { key, firstname, lastname, birthday, age, hobby } = action.payload;
    //     const newData = {
    //         key: key,
    //         firstname: firstname,
    //         lastname: lastname,
    //         birthday: birthday,
    //         age: age,
    //         hobby: hobby,
    //     };
    //     state = {dataSource: [...dataSource, newData]}

    //     return state.dataSource;

    // }

    // if(action.type === 'DELETE_DETAIL'){
    //     const key = action.payload;
    //     const dataSource = [...state.dataSource];
    //     state = { dataSource: dataSource.filter(item => item.key !== key) }
    //     return state.dataSource;
    // }

    //  if (action.type === 'EDIT_DETAIL'){
    //     const row = action.payload;
    //     const newData = [...state.dataSource];
    //     const index = newData.findIndex(item => row.key === item.key);
    //     const item = newData[index];
    //     newData.splice(index, 1, {
    //     ...item,
    //     ...row,
    //     });
    //      state = {
    //          dataSource: newData }
    //     return state.dataSource;
    // }

//     return state;
// };



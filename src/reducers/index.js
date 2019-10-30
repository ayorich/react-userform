import { combineReducers } from 'redux';
import { actionTypes } from '../actions';

let state = [];

// export default (state = [] ,{ type, payload }) => {
//   switch (type) {
//       case actionTypes.FETCH_USER:
//       return state.set("items", fromJS(payload));
//     default:
//       return state;
//   }
// };
 const userDetailsReducer = (data= state , action) => {
    // const { dataSource } = state;
     console.log(state);
     console.log(action.type);
     console.log(action.data);
     if (action.type === actionTypes.FETCH_USER) {
          const newData = action.data;
          state = [...data, newData];

         return state
     }

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

    return state;
};


export default combineReducers({
    userDetails : userDetailsReducer
})
import { combineReducers } from 'redux';
let state = {
      dataSource: [{
        key: 0,
        firstname: 'AYODELE',
        lastname: 'KAYODE',
        birthday: '10-10-2019',
        age: 25,
        hobby: 'GOLF',
      }],
      count: 1,
    };

 const userDetailsReducer = (data= state , action) => {
    const { dataSource, count } = state;
    if (action.type === 'SUBMIT_FORM') {
        const { firstname, lastname, birthday, age, hobby } = action.payload;
        const newData = {
            key: count,
            firstname: firstname,
            lastname: lastname,
            birthday: birthday,
            age: age,
            hobby: hobby,
        };
        state = {dataSource: [...dataSource, newData],
                            count: count + 1,}

        return state.dataSource;

    }
if(action.type === 'DELETE_DETAIL'){
    return null;
}






    return dataSource;
};



export default combineReducers({
    userDetails : userDetailsReducer
})
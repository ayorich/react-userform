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
        const key = action.payload;
        const dataSource = [...state.dataSource];
        state = { dataSource: dataSource.filter(item => item.key !== key) }
        return state.dataSource;
    }

     if (action.type === 'EDIT_DETAIL'){
        const row = action.payload;
        const newData = [...state.dataSource];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
        ...item,
        ...row,
        });
         state = {
             dataSource: newData }
        return state.dataSource;
    }

    return dataSource;
};




export default combineReducers({
    userDetails : userDetailsReducer
})
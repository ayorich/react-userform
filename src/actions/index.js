// ACTION CREATOR
export const submit = details => {
    console.log(details);
    //RETURN ACTION
    return {
        type: 'SUBMIT_FORM',
        payload: details
    };
};

export const deleteDetail = key => {
    console.log(key)
    return{
        type: 'DELETE_DETAIL',
        payload: key
    }
}

export const handleSave = row => {
    console.log(row);
    return{
        type: 'EDIT_DETAIL',
        payload: row
    }
}



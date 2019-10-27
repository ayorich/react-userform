// ACTION CREATOR
export const submit = (details) => {
    //RETURN ACTION
    return {
        type: 'SUBMIT_FORM',
        payload: details
    };
};

export const deleteDetail = key => {
    
    return{
        type: 'DELETE_DETAIL',
        payload: key
    }
}

export const handleSave = row => {
    
    return{
        type: 'EDIT_DETAIL',
        payload: row
    }
}



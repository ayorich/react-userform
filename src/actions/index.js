// ACTION CREATOR
export const submit = details => {
    console.log(details);
    //RETURN ACTION
    return {
        type: 'SUBMIT_FORM',
        payload: details
    };
};

export const deleteDetail = d => {
    return{
        type: 'DELETE_DETAIL',
        payload: d
    }
}
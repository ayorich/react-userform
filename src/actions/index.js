//ACTION CREATOR
export const submit = details => {
    //RETURN ACTION
    return{
        type: 'SUBMIT_FORM',
        payload: details
    };
};
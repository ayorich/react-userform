// ACTION CREATOR
export const submit = details => {
    console.log(details);
    //RETURN ACTION
    return {
        type: 'SUBMIT_FORM',
        payload: details
    };
};
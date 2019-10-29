const urlPostMovies = 'https://us-central1-userformapi.cloudfunctions.net/entries';



function* postingDataApi (data){
        // console.log(data);
    const response = yield fetch(urlPostMovies, {
        method: 'POST',
        headers:{
            Accept: 'application/json',
            'content-type': 'application/json',
        },
        body:JSON.stringify({
            firstname: data.firstname,
            lastname: data.lastname,
            birthday: data.birthday,
            age: data.age,
            hobby: data.hobby
        })
    });
    console.log(`response = ${JSON.stringify(response)}`)
    return yield (response.status === 201);
}

export const Api = {
    postingDataApi,
}
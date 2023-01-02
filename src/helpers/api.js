const API = async (path, searchString) => {
    return await fetch(`https://api.giphy.com/v1/${path}&api_key=pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa`, {
        method: 'GET',
    });
}

const search = async (searchString) => {
    const response = await API(`gifs/search?q=${searchString}`, searchString);
    return response;
}

export {
    API,
    search
};
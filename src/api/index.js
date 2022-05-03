// get your own key from unsplash please 😇
// const KEY = '?client_id=5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';
// const URL = `https://api.unsplash.com/photos/`;

const URL = "http://localhost:5000/api/v1/files";

const fetchData = async page => {
    // const response = await fetch(`${URL}${KEY}&per_page=3&page=${page}`);

    const response = await fetch(`${URL}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

export { fetchData };

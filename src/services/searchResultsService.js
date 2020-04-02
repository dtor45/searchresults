import axios from "axios";

const getAll = () => {
    const url = "https://jsonplaceholder.typicode.com/photos";

    const config = {
        method: "GET",
        url: url
    }

    return axios(config);
};

export {
    getAll
};
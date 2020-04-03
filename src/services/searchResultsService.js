import axios from "axios";

const getAll = () => {
  const url = "http://localhost:3000/products";

  const config = {
    method: "GET",
    url: url
  };

  return axios(config);
};

export { getAll };

import axios from "axios";

const handeLoginApi = (email, password) => {
    return axios.post("/api/login", { email, password });
};

export { handeLoginApi };

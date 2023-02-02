import axios from "../axios";

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post("/api/login", {
        email: userEmail,
        password: userPassword,
    });
};

const getAllUsers = (userId) => {
    return axios.get(`/api/get-all-users?id=${userId}`);
};

const createNewUserByReact = (data) => {
    return axios.post("/api/create-new-user", data);
};

const deleteUserByReact = (userId) => {
    return axios.delete("/api/delete-user", {
        data: {
            id: userId,
        },
    });
};

const editUserByReact = (data) => {
    return axios.put("/api/edit-user", data);
};
export {
    handleLoginApi,
    getAllUsers,
    createNewUserByReact,
    deleteUserByReact,
    editUserByReact,
};

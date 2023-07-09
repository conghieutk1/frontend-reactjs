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
const getAllCodeService = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`);
};
const getTopControllerHomeService = (limit) => {
    return axios.get(`/api/top-doctor-home?limit=${limit}`);
};

const getAllDoctors = () => {
    return axios.get(`/api/get-all-doctors`);
};

const saveDetailDoctorService = (data) => {
    return axios.post("/api/save-infor-doctors", data);
};

const getDetailInforDoctor = (id) => {
    return axios.get(`/api/get-detail-doctor-by-id?id=${id}`);
};

export {
    handleLoginApi,
    getAllUsers,
    createNewUserByReact,
    deleteUserByReact,
    editUserByReact,
    getAllCodeService,
    getTopControllerHomeService,
    getAllDoctors,
    saveDetailDoctorService,
    getDetailInforDoctor,
};

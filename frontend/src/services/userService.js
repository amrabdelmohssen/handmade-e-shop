import http from "../utils/http";

const login = ({ email, password }, config) => {
    return http.post(`/users/login`, { email, password }, config);
};

const signup = ({ name, email, password, passwordConfirm }, config) => {
    return http.post(
        `/users/signup`,
        { name, email, password, passwordConfirm },
        config
    );
};

const getMe = (config) => {
    return http.get(`/users/me`, config);
};

const updateMe = (data, config) => {
    return http.patch(`/users/updateMe`, data, config);
};

const updateMyPassword = (data, config) => {
    return http.patch(`/users/updateMyPassword`, data, config);
};

const getAllUasersApi = (config) =>{
    return http.get(`/users`,config)
}
const UserService = {
    login,
    signup,
    getMe,
    updateMe,
    updateMyPassword,
    getAllUasersApi
};

export default UserService;

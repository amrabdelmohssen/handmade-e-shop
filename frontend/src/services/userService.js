import http from "../utils/http";

const login = ({ email, password }, config) => {
    return http.post(`/users/login`, { email, password }, config);
};

const signup = ({ name, email, password, passwordConfirm }, config) => {
    return http.post(`/users/signup`, { name, email, password, passwordConfirm }, config);
};
const UserService = {
    login,
    signup,
};

export default UserService;

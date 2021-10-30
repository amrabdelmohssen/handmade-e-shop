import http from "../utils/http";

const login = ({ email, password }, config) => {
    return http.post(`/users/login`, { email, password }, config);
};
const UserService = {
    login,
};

export default UserService;

import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL } from "./types";
import UserService from "../services/userService";

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        let res = await UserService.login({ email, password }, config);
        res = res.data;
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: res,
        });

        localStorage.setItem("userInfo", JSON.stringify(res));
    } catch (err) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: err.response && err.response.data.message ? err.response.data.message : err.message,
        });
    }
};

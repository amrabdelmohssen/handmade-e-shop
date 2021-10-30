import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
} from "./types";
import UserService from "../services/userService";

export const login = (email, password) => async(dispatch) => {
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

        localStorage.setItem("userInfo", JSON.stringify(res)); //res is res.data
        //add cookie
    } catch (err) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: err.response && err.response.data.message ? err.response.data.message : err.message,
        });
    }
};

export const logout = () => (dispatch) => { //delete cookie
    localStorage.removeItem("userInfo"); //remove line 
    //TODO add line delete cookie
    dispatch({ type: USER_LOGIN_LOGOUT });
};

export const register = (name, email, password, passwordConfirm) => async(dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST,
        });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        let res = await UserService.signup({ name, email, password, passwordConfirm }, config);
        res = res.data;
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: res,
        });

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: res,
        });

        localStorage.setItem("userInfo", JSON.stringify(res));
        // TODO add cookie
    } catch (err) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: err.response && err.response.data.message ? err.response.data.message : err.message,
        });
    }
};
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PASSWORD_SUCCESS,
    USER_UPDATE_PASSWORD_FAIL,
    USER_UPDATE_PASSWORD_REQUEST,
    GET_USERS
} from "./types";
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

        localStorage.setItem("userInfo", JSON.stringify(res)); //res is res.data
        //add cookie
    } catch (err) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message,
        });
    }
};

export const logout = () => (dispatch) => {
    //delete cookie
    localStorage.removeItem("userInfo"); //remove line
    //TODO add line delete cookie
    dispatch({ type: USER_LOGIN_LOGOUT, payload: [] });
};

export const register =
    (name, email, password, passwordConfirm) => async (dispatch) => {
        try {
            dispatch({
                type: USER_REGISTER_REQUEST,
            });

            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };

            let res = await UserService.signup(
                { name, email, password, passwordConfirm },
                config
            );
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
        } catch (err) {
            dispatch({
                type: USER_REGISTER_FAIL,
                payload:
                    err.response && err.response.data.message
                        ? err.response.data.message
                        : err.message,
            });
        }
    };

export const getUserDetails = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DETAILS_REQUEST,
        });

        const {
            userLoginReducer: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        let { data } = await UserService.getMe(config);
        data = data.data.data;
        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload:
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message,
        });
    }
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_UPDATE_PROFILE_REQUEST,
        });

        const {
            userLoginReducer: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        let { data } = await UserService.updateMe(user, config);
        data = data.data.data;
        dispatch({
            type: USER_UPDATE_PROFILE_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload:
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message,
        });
    }
};

export const updateUserPassword = (user) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_UPDATE_PASSWORD_REQUEST,
        });

        const {
            userLoginReducer: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        let { data } = await UserService.updateMyPassword(user, config);
        dispatch({
            type: USER_UPDATE_PASSWORD_SUCCESS,
            payload: data,
        });

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: USER_UPDATE_PASSWORD_FAIL,
            payload:
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message,
        });
    }
};

const getUsersAction = ()=> async(dispatch,getState)=>{
    try{
       
        const {
            userLoginReducer: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const res = await UserService.getAllUasersApi(config)
        console.log(res);

        dispatch({
            type: GET_USERS,
            payload : res.data
        })
    }catch(err){
        console.log(err)
    }
    
}

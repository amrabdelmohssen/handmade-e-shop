import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import searchReducer from "./searchReducer";
import { orderCreateReducer, orderDetailsReducer, orderPayReducer } from "./orderReducer";
import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userUpdatePasswordReducer,
    usersReducer
} from "./userReducer";

export default combineReducers({
    productReducer,
    cartReducer,
    searchReducer,
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userUpdatePasswordReducer,
    orderCreateReducer,
    orderDetailsReducer,
    orderPayReducer,
    usersReducer
});

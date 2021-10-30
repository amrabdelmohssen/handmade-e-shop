import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import { userLoginReducer, userRegisterReducer } from "./userReducer";
export default combineReducers({
    productReducer,
    cartReducer,
    userLoginReducer,
    userRegisterReducer,
});

import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import searchReducer from "./searchReducer";
import { userLoginReducer, userRegisterReducer } from "./userReducer";
export default combineReducers({
    productReducer,
    cartReducer,
    searchReducer,
    userLoginReducer,
    userRegisterReducer,
});

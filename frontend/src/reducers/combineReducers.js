import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import userLoginReducer from "./userReducer";
export default combineReducers({
    productReducer,
    cartReducer,
    userLoginReducer,
});

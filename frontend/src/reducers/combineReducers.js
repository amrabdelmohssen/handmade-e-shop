import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import searchReducer from "./searchReducer";
import rootReducer from "./rootReducer";
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
<<<<<<< HEAD
    // orderCreateReducer,
    // orderDetailsReducer,
    // orderPayReducer,
    // orderListMyReducer,
    rootReducer,
=======
    orderCreateReducer,
    orderDetailsReducer,
    orderPayReducer,
    usersReducer,
    orderListMyReducer

>>>>>>> 652180e3e9d286e2fdaf7abd377052db1ae78c86
});

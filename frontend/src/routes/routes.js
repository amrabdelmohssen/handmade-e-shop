import { Route } from "react-router-dom";
import productDetail from "../pages/productDetail/productDetail";
import Cart from "../pages/cart/cart";
import Login from "../pages/login/login";
export function Routes() {
    return (
        <div>
            <Route path="/product/:id" exact component={productDetail} />
            <Route path="/cart/:id?" exact component={Cart} />
            <Route path="/login" exact component={Login} />
        </div>
    );
}

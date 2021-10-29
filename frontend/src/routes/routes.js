import { Route } from "react-router-dom";
import productDetail from "../pages/productDetail/productDetail";
import Cart from "../pages/cart/cart";
export function Routes() {
    return (
        <div>
            <Route path="/product/:id" exact component={productDetail} />
            <Route path="/cart/:id?" exact component={Cart}/>
        </div>
    );
}

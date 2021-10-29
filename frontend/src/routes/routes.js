import { Route } from "react-router-dom";
import productDetail from "../pages/productDetail/productDetail";
import Cart from "../pages/cart/cart";
import { Home } from "../pages/home/home";
export function Routes() {
    return (
        <div>
            <Route path="/product/:id" exact component={productDetail} />
            <Route path="/cart/:id?" exact component={Cart}/>
            <Route path='/' exact component = {Home}/>
        </div>
    );
}

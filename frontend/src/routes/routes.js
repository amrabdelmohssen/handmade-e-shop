import { Route } from "react-router-dom";
import productDetail from "../pages/productDetail/productDetail";
import Cart from "../pages/cart/cart";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import { Home } from "../pages/home/home";
import ListProducts from "../components/listProducts/listProducts";
export function Routes() {
  return (
    <div>
      <Route path="/products/:id" exact component={ListProducts} />
      <Route path="/product/:id" exact component={productDetail} />
      <Route path="/cart/:id?" exact component={Cart} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/" exact component={Home} />
    </div>
  );
}

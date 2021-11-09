import { Route } from "react-router-dom";
import productDetail from "../pages/productDetail/productDetail";
import Cart from "../pages/cart/cart";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import { Home } from "../pages/home/home";
import ListProducts from "../components/listProducts/listProducts";
import Profile from "../pages/profile/profile";
import UpdatePassword from "../pages/updatePassword/updatePassword";
import Shipping from "../pages/shipping/shipping";
import Payment from "../pages/payment/payment";
import PlaceOrder from "../pages/placeOrder/placeOrder";
import DisplayOrder from "../pages/displayOrder/displayOrder";
import { ProductSearch } from "../pages/productSearch/productSearch";

export function Routes() {
  return (
    <div>
      <Route path="/products/:id" exact component={ListProducts} />
      <Route path="/product/:id" exact component={productDetail} />
      <Route path="/productSearch/:name" exact component={ProductSearch} />
      <Route path="/cart/:id?" exact component={Cart} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/changePassword" exact component={UpdatePassword} />
      <Route path="/shipping" exact component={Shipping} />
      <Route path="/payment" exact component={Payment} />
      <Route path="/placeorder" exact component={PlaceOrder} />
      <Route path="/order/:id" exact component={DisplayOrder} />
      <Route path="/" exact component={Home} />
    </div>
  );
}

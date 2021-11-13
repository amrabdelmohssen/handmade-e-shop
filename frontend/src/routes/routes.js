import { Route } from "react-router-dom";
import productDetail from "../pages/productDetail/productDetail";
import Cart from "../pages/cart/cart";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import { Home } from "../pages/home/home";
import  {ProductSearch}  from "../pages/productSearch/productSearch";
import ListProducts from "../components/listProducts/listProducts";
import Profile from "../pages/profile/profile";
import UpdatePassword from "../pages/updatePassword/updatePassword";
import Shipping from "../pages/shipping/shipping";
import Payment from "../pages/payment/payment";
import PlaceOrder from "../pages/placeOrder/placeOrder";
import DisplayOrder from "../pages/displayOrder/displayOrder";
<<<<<<< HEAD
import { ProductSearch } from "../pages/productSearch/productSearch";
import  singleOrder, { Order } from "../components/order/singleOrder";
import listOrders from "../components/order/listOrders";

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
      <Route  path='/list' exact component= {listOrders} />
      <Route  path='/singleOrder/:id' exact component={singleOrder} />
      <Route path="/" exact component={Home} />
    </div>
  );
=======
import { GetAllUsersPage } from "../pages/usersdashboard/getAllUsers/getAllUsers";
import { UpdateUser } from "../pages/usersdashboard/updateUser/updateUser";

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
            <Route path = "/getusers" exact component={GetAllUsersPage}/> 
            <Route path = "/edituser/:id" exact component = {UpdateUser} />

        </div>
    );
>>>>>>> 652180e3e9d286e2fdaf7abd377052db1ae78c86
}

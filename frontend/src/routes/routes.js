import { Route } from "react-router-dom"; 
import productDetail from "../pages/productDetail/productDetail";
export function Routes(){
    return(
        <div>
            <Route path="/product/:id" exact component={productDetail}/>
        </div>
    )
}
import ProductService from "../services/productService";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "./types";

export const addToCart = (i, qty) => async (dispatch, getState) => {
    try {
        let res = await ProductService.getOne(i);
        res = res.data.data.data;
        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                id: res.id,
                name: res.name,
                image: res.image,
                price: res.price,
                countInStock: res.countInStock,
                qty,
            },
        });
        localStorage.setItem("cartItems", JSON.stringify(getState().cartReducer.cartItems));
    } catch (err) {
        console.log(err);
    }
};

export const removeFromCart = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CART_REMOVE_ITEM,
            payload: id,
        });
        localStorage.setItem("cartItems", JSON.stringify(getState().cartReducer.cartItems));
    } catch (err) {
        console.log(err);
    }
};

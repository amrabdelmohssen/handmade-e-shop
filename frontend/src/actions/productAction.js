import { GET_PRODUCT, GET_PRODUCTS } from "./types";

import ProductService from "../services/productService";

export const getProduct = (i) => async(dispatch) => {
    try {
        const res = await ProductService.getOne(i);
        dispatch({
            type: GET_PRODUCT,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const getProducts = (i) => async(dispatch) => {
    try {
        const res = await ProductService.getAll(i);
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};
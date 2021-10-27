import { GET_PRODUCT } from "./types";

import ProductService from "../services/productService";

export const getProduct = (i) => async (dispatch) => {
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

import {
    GET_PRODUCT,
    GET_PRODUCTS,
    GET_PRODUCTS_BY_CATEGORY_ID,
    POST_PRODUCTS,
    UPDATE_PRODUCTS,
    DELETE_PRODUCTS
} from "./types";

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

export const getProducts = () => async(dispatch) => {
    try {
        const res = await ProductService.getAll();
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const getProductsByCategoryId = (id, queryString) => async(dispatch) => {
    try {
        const res = await ProductService.getAllByCategoryId(id, queryString);
        dispatch({
            type: GET_PRODUCTS_BY_CATEGORY_ID,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const updateProducts = (id, product) => async(dispatch) => {
    try {
        const res = await ProductService.updateOne(id, product);
        dispatch({
            type: UPDATE_PRODUCTS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const AddProduct = (product) => async(dispatch) => {
    try {
        const res = await ProductService.AddOne(JSON.stringify(product));
        dispatch({
            type: POST_PRODUCTS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const deleteProducts = (id) => async(dispatch) => {
    try {
        const res = await ProductService.deleteOne(id);
        dispatch({
            type: DELETE_PRODUCTS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};
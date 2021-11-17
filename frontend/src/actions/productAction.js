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

export const updateProducts = (id, product) => async(dispatch, getState) => {
    try {
        const {
            userLoginReducer: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const res = await ProductService.updateOne(id, product, config);
        dispatch({
            type: UPDATE_PRODUCTS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const AddProduct = (name,
    description,
    richDescription,
    brand,
    price,
    category,
    countInStock,
    rating,
    numReviews,
    isFeatured) => async(dispatch, getState) => {
    try {
        const {
            userLoginReducer: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const res = await ProductService.AddOne({
            name,
            description,
            richDescription,
            brand,
            price,
            category,
            countInStock,
            rating,
            numReviews,
            isFeatured
        }, config);
        // const res = await ProductService.AddOne(JSON.stringify({
        //     name,
        //     description,
        //     richDescription,
        //     brand,
        //     price,
        //     category,
        //     countInStock,
        //     rating,
        //     numReviews,
        //     isFeatured
        // }, config));
        dispatch({
            type: POST_PRODUCTS,
            payload: res.data,
        });
        // return Promise.resolve(res.data);

    } catch (err) {
        console.log(err);
        // return Promise.reject(err);
    }
};

export const deleteProducts = (id) => async(dispatch, getState) => {
    try {
        const {
            userLoginReducer: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const res = await ProductService.deleteOne(id, config);
        dispatch({
            type: DELETE_PRODUCTS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};
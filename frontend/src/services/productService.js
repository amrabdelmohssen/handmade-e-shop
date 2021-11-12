import http from "../utils/http";

const getOne = (id) => {
    return http.get(`/products/${id}`);
};
const getAll = () => {
    return http.get("/products"); //?lgt
};
const getAllByCategoryId = (id, queryString) => {
    return http.get(`/products/category/${id}${queryString}`); //?sort=price
    console.log(`id : ${id} queryString : ${queryString}`);
};
const ProductService = {
    getOne,
    getAll,
    getAllByCategoryId,
};

export default ProductService;
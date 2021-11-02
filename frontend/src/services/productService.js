import http from "../utils/http";

const getOne = (id) => {
    return http.get(`/products/${id}`);
};
const getAll = () => {
    return http.get("/products"); //?lgt
};
const getAllByCategoryId = (id) => {
    return http.get(`/products/category/${id}`); //?lgt
};
const ProductService = {
    getOne,
    getAll,
    getAllByCategoryId,
};

export default ProductService;
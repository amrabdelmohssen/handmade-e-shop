import http from "../utils/http";

const getOne = (id) => {
    return http.get(`/products/${id}`);
};
const getAll = () => {
    return http.get("/products"); //?lgt
};
const ProductService = {
    getOne,
    getAll,
};

export default ProductService;
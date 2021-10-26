import http from "../utils/http";

const getOne = (id) => {
    return http.get(`/products/${id}`);
};
const ProductService = {
    getOne,
};

export default ProductService;

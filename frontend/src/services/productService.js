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
const updateOne = (id, product) => {
    return http.put(`/products/${id}`, product);
};
const AddOne = (product) => {
    return http.post("/products", product);
};
const deleteOne = (id) => {
    return http.delete(`/products/${id}`);
};
const ProductService = {
    getOne,
    getAll,
    getAllByCategoryId,
    updateOne,
    AddOne,
    deleteOne
};

export default ProductService;
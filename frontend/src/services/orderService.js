import http from "../utils/http";

const createOrder = (order, config) => {
    return http.post(`/orders`, order, config);
};

const getOrder = (id, config) => {
    return http.get(`/orders/${id}`, config);
};

const payOrder = (id, paymentResult, config) => {
    return http.put(`/orders/${id}/pay`, paymentResult, config);
};

const OrderService = {
    createOrder,
    getOrder,
    payOrder
};

export default OrderService;

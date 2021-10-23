let express = require("express");
let OrderItemRouter = express.Router();
let mongoose = require("mongoose");
let OrderItemController = require("../controller/OrderItemController");
require("../models/Product");
// let OrderItemSchema = mongoose.model("OrderItem");

OrderItemRouter
    .route('/')
    .get(OrderItemController.getOrderItems)
    .post(OrderItemController.AddOrderItem)

OrderItemRouter
    .route('/:id')
    .post(OrderItemController.updateOrderItem)

OrderItemRouter
    .route('/:id')
    .delete(OrderItemController.deleteOrderItem)

module.exports = OrderItemRouter
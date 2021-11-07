const express = require("express");
const mongoose = require("mongoose");
const orderRouter = express.Router();
const orderController = require("../controllers/orderController");
require("../models/Order");
const OrderSchema = mongoose.model("Order");

orderRouter.route("/").get(orderController.getAllOrders).post(orderController.createOrder);

orderRouter
    .route("/:id")
    .get(orderController.getOneOrder)
    .put(orderController.updateOrder)
    .delete(orderController.deleteOrder);

orderRouter.route("/:id/pay").put(orderController.updateOrderToPaid);

orderRouter.get("/get/totalsales", orderController.getTotalSales);
orderRouter.get("/get/count", orderController.getNumberOfOrders);
orderRouter.get("/get/userorders/:id", orderController.getUserOrders);

module.exports = orderRouter;

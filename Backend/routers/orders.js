const express = require('express') ;
const mongoose  = require('mongoose');
const  orderRouter = express.Router()
const orderController = require("../controllers/orderController")
require('../models/Order')
const OrderSchema = mongoose.model("Order");

orderRouter
.route('/')
// .get(orderController.getAllOrders)
.post(orderController.createOrder)

orderRouter
.route('/:id')
.get(orderController.getOneOrder)
.put(orderController.updateOrder)
.delete(orderController.deleteOrder)

// pagenation
orderRouter
.route('/')
.get(orderController.getAllOrdersByPagenation)


module.exports = orderRouter

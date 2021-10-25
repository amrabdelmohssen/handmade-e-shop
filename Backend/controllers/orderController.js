const Order = require("../models/Order");
const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory.js");
const AppError = require("../utils/appError");
const Orderitem = require("../models/Orderitem");

exports.getAllOrders = factory.getAll(Order);
exports.getOneOrder = factory.getOne(Order);
exports.updateOrder = factory.UpdateOne(Order);
exports.deleteOrder = factory.deleteOne(Order);
exports.createOrder = catchAsync(async (req, res, next) => {
    const { user, orderItems, shippingAddressOne, shippingAddressTwo, city, zipCode, country, phone, status, totalPrice } = req.body;
    const orderItemIds = Promise.all(
        orderItems.map(async (orderItem) => {
            let newOrderItem = new Orderitem({ quantity: orderItem.quantity, product: orderItem.product });
            newOrderItem = await newOrderItem.save();
            return newOrderItem._id;
        })
    );
    const orderItemsIdsResolved = await orderItemIds;

    const newOrder = await Order.create({
        user,
        orderItems: orderItemsIdsResolved,
        shippingAddressOne,
        shippingAddressTwo,
        city,
        zipCode,
        country,
        phone,
        status,
        totalPrice,
    });

    return res.status(201).json({
        status: "success",
        data: {
            data: newOrder,
        },
    });
});

exports.getTotalSales = catchAsync(async (req, res, next) => {
    const totalSales = await Order.aggregate([{ $group: { _id: null, totalsales: { $sum: "$totalPrice" } } }]);
    if (!totalSales) {
        return next(new AppError("The order Sales Cannot be Generated", 400));
    }
    res.status(200).json({ status: "success", data: { data: totalSales.pop().totalsales } });
});

exports.getNumberOfOrders = catchAsync(async (req, res, next) => {
    const orderCount = await Order.countDocuments();
    if (!orderCount) return next(new AppError("There's No orders yet", 500));

    res.status(200).json({ status: "success", data: { data: orderCount } });
});

exports.getUserOrders = catchAsync(async (req, res, next) => {
    const userOrderList = await Order.find({ user: req.params.id })
    .populate({ path: "orderItems", populate: { path: "product", populate: "category" } })
    .sort({ dateOrdered: -1 });

    if (userOrderList.length == 0) {
        return next(new AppError("There's No orders for this user", 500));
    }

    res.status(200).json({ status: "success", data: { data: userOrderList } });
});

const OrderItem = require("../models/OrderItem");

exports.getOrderItems = async(req, res) => {
    try {
        const singleOrderItem = await OrderItem.find({});
        console.log("success to get data");
        return res.status(200).json(singleOrderItem);
    } catch (e) {
        console.log("some thing error");
        return res.status(500).json(e.message);
    }
};

exports.AddOrderItem = async(req, res) => {
    try {
        const newItem = new OrderItem({
            // product: req.params.product,
            quantity: req.body.quantity,
        })
        const singleOrderItem = await newItem.save()
        if (!singleOrderItem) {
            throw new Error("no OrderItem to add")
        }
        return res.status(201).json(singleOrderItem)
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};

exports.updateOrderItem = async(req, res) => {
    try {
        OrderItem.findByIdAndUpdate(req.params.id, {
            // product: req.params.product,
            quantity: req.body.quantity,
        }, { new: true })
        const singleOrderItem = await OrderItem.save()
        return res.status(200).json(singleOrderItem)
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};
exports.deleteOrderItem = async(req, res) => {
    try {
        const singleOrderItem = await cropsName.findByIdAndRemove({ _id: req.params.id });
        return res.status(200).json(singleOrderItem);
    } catch (e) {
        return res.status(500).json(e.message);
    }
};
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

exports.getOneOrderItem = async(req, res) => {
    try {
        const prod = await OrderItem.findOne({ _id: req.params.id });
        return res.status(200).json(prod);
    } catch (e) {
        return res.status(500).json(e.message);
    }
};

exports.addOrderItem = async(req, res) => {
    try {
        const {
            quantity
            // ,product
        } = req.body; //required
        const newname = new OrderItem({
            // product,
            quantity,
        });
        const singleOrderItem = await newname.save();
        if (!singleOrderItem) {
            throw new Error("no OrderItem to add");
        }
        return res.status(201).json(singleOrderItem);
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};

exports.updateOrderItem = async(req, res) => {
    try {
        const {
            quantity
            // ,product
        } = req.body; //required
        OrderItem.findByIdAndUpdate(
            req.params.id, {
                // product,
                quantity,
            }, { new: true }
        );
        const singleOrderItem = await newname.save();
        return res.status(200).json(singleOrderItem);
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};

exports.deleteOrderItem = async(req, res) => {
    try {
        const singleOrderItem = await OrderItem.findByIdAndRemove(req.params.id);
        return res.status(200).json(singleOrderItem);
    } catch (e) {
        return res.status(500).json(e.message);
    }
};
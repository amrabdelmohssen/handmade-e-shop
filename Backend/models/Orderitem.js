const mongoose = require("mongoose");
const product = require("./Product");


const OrderItemSchema = mongoose.Schema({
    // product: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "product",
    //     required: true
    // }, ],
    // Product: [mongoose.Schema.Types.product],
    // Product: [product.productSchema],
    quantity: {
        type: Number,
        default: 0,
        required: true
    },
})

productSchema.virtual("id").get(function() {
    return this._id.toHexString();
})

OrderItemSchema.set("toJSON", {
    virtuals: true,
})

exports.OrderItems = mongoose.model("OrderItems", OrderItemSchema);
module.exports = mongoose.model("OrderItems", OrderItemSchema);
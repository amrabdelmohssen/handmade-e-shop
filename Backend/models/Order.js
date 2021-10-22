const mongoose = require("mongoose")

const OrderSchema = mongoose.Schema({

    user:[{
        type : mongoose.Schema.ObjectId,
        ref:"User",
        required:true
    }],
    orderItems:{
        type: mongoose.Schema.ObjectId,
        ref:"OrderItem",
        required:true

    },

    shippingAddressOne:{
        type: String,
        required:true
    },

    shippingAddressTwo:{
        type: String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    zipCode:{
        type:String,
        required:true
    },

    country:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    totalPrice:{
        type:String,
        required:true
    },

   
},{timestamps: true })

OrderSchema.virtual("id").get(function () {
    return this._id.toHexString();
});

OrderSchema.set("toJSON", {virtuals: true,});

module.exports = mongoose.model("Order", OrderSchema);

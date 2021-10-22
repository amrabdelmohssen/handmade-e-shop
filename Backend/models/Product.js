const mongoose = require("mongoose");
const category = require("./Category");

const productSchema = mongoose.Schema({
    // category: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Category",
    //     required: true,
    // },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    richDescription: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: "",
    },
    images: [{
        type: String,
    }, ],
    brand: {
        type: String,
    },
    numReviews: {
        type: Number,
        default: 0,
    },
    price: {
        type: Number,
        default: 0,
    },

    countingStock: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        default: 0,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
});

productSchema.virtual("id").get(function() {
    return this._id.toHexString();
});

productSchema.set("toJSON", {
    virtuals: true,
});

module.exports = mongoose.model("products", productSchema);
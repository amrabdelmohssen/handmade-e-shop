const Product = require("../models/Product");
const Category = require("../models/Category");
const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory.js");
const AppError = require("../utils/appError");

exports.getProducts = factory.getAll(Product);
exports.getOneProduct = factory.getOne(Product);
exports.updateProduct = factory.UpdateOne(Product);
exports.deleteProduct = factory.deleteOne(Product);

exports.addProduct = catchAsync(async (req, res, next) => {
    let { name, description, richDescription, image, brand, price, category, countInStock, rating, numReviews, isFeatured } = req.body;
    console.log(req.body);
    category = await Category.findById(category);
    if (!category) return next(new AppError("Invalid Category", 400));

    let product = await Product.create({
        name,
        description,
        richDescription,
        image,
        brand,
        price,
        category: req.body.category,
        countInStock,
        rating,
        numReviews,
        isFeatured,
    });

    return res.status(201).json({
        status: "success",
        data: {
            data: product,
        },
    });
});

exports.getNumberOfProducts = catchAsync(async (req, res, next) => {
    const productCount = await Product.countDocuments();
    if (!productCount) return next(new AppError("There's No Products yet", 500));
    res.status(200).json({ status: "success", data: { data: productCount } });
});

exports.getFeaturedProducts = catchAsync(async (req, res,next) => {
    let products;
    if (req.params.count) {
        products = await Product.find({
            isFeatured: true,
        }).limit(+req.params.count);
    } else {
        products = await Product.find({
            isFeatured: true,
        });
    }
    if (!products) return next(new AppError("There's No Featured Products yet", 500));
    res.status(200).json({ status: "success", data: { data: products } });

});

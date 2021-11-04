const Product = require("../models/Product");
const Category = require("../models/Category");
const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory.js");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/APIFeatures.js");

exports.getProducts = factory.getAll(Product);
exports.getOneProduct = factory.getOne(Product);
exports.updateProduct = factory.UpdateOne(Product);
exports.deleteProduct = factory.deleteOne(Product);

exports.getProductsByCategory = catchAsync(async (req, res, next) => {
    let products = new APIFeatures(Product.find(), req.query).filter().sort().limitfields().paginate();
    products = await products.query;

    if (!products) return next(new AppError("There's No Products For this Category", 500));
    res.status(200).json({ status: "success", data: { data: products } });
});
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

exports.searchProduct = catchAsync(async (req, res, next) => {
    const products = await Product.find({ name: { $regex: req.query.name } });
    if (!products) return next(new AppError("No Products Found", 500));
    return res.status(201).json({
        status: "success",
        results: products.length,
        data: {
            data: products,
        },
    });
});

exports.getNumberOfProducts = catchAsync(async (req, res, next) => {
    const productCount = await Product.countDocuments();
    if (!productCount) return next(new AppError("There's No Products yet", 500));
    res.status(200).json({ status: "success", data: { data: productCount } });
});

exports.getFeaturedProducts = catchAsync(async (req, res, next) => {
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

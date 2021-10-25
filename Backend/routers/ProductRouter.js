let express = require("express");
let ProductRouter = express.Router();
let mongoose = require("mongoose");
let productController = require("../controllers/productController");
require("../models/Product");
let productSchema = mongoose.model("Product");

ProductRouter.route("/").get(productController.getProducts).post(productController.addProduct);

ProductRouter.route("/:id").get(productController.getOneProduct).put(productController.updateProduct);

ProductRouter.route("/:id").delete(productController.deleteProduct);

ProductRouter.get(`/get/count`, productController.getNumberOfProducts);

ProductRouter.get(`/get/featured/:count?`, productController.getFeaturedProducts);

module.exports = ProductRouter;

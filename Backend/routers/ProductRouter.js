let express = require("express");
let ProductRouter = express.Router();
let mongoose = require("mongoose");
let ProductController = require("../controllers/ProductController");
require("../models/Product");
let ProductsSchema = mongoose.model("Products");

ProductRouter.route("/")
    .get(ProductController.addProduct)
    .post(ProductController.addProduct);

ProductRouter.route("/:id")
    .get(ProductController.getOneProduct)
    .post(ProductController.updateProduct);

ProductRouter.route("/:id").delete(ProductController.deleteProduct);

module.exports = ProductRouter;
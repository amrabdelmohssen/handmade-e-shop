let express = require("express");
let CategoryRouter = express.Router();

let categoryController = require("../controllers/categoryController");
require("../models/Product");

CategoryRouter.route("/").get(categoryController.getCategories).post(categoryController.addCategory);

CategoryRouter.route("/:id").get(categoryController.getOneCategory).put(categoryController.updateCategory);

CategoryRouter.route("/:id").delete(categoryController.deleteCategory);

module.exports = CategoryRouter;

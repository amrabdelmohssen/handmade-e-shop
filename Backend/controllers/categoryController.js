const Category = require("../models/Category");
const factory = require("./handlerFactory.js");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getCategories = factory.getAll(Category);
exports.getOneCategory = factory.getOne(Category);
exports.addCategory = factory.createOne(Category);
exports.updateCategory = factory.UpdateOne(Category);
exports.deleteCategory = factory.deleteOne(Category);
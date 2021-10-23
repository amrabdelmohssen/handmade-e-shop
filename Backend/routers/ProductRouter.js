let express=require("express");
let ProductRouter=express.Router();
let mongoose=require("mongoose");
let productController=require("../controler/productControler");
require("../models/Product");
let  productSchema=mongoose.model("products");

ProductRouter
.route('/')
.get(productController.getProducts)
.post(productController.addProduct)

ProductRouter
.route('/:id')
.get(productController.getOneProduct)
.post(productController.updateProduct)

ProductRouter
.route('/:id')
.delete(productController.deleteProduct)

module.exports=ProductRouter



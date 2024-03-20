const express = require("express")
const { getProduct, createProduct, editProduct, deleteProduct } = require("../controller/productController")
const productRoute = express.Router()

productRoute.get("/get-product", getProduct)

productRoute.post("/create-product", createProduct)
productRoute.put("/edit-product", editProduct)

productRoute.delete("/delete-product", deleteProduct)

module.exports = { productRoute }
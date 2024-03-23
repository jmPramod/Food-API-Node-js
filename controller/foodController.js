
const foodModel = require("../model/MenuSchema")
const authSchema = require('../model/AuthSchema');

const jwt = require('jsonwebtoken');
require("dotenv").config()
const getProduct = async (req, res, next) => {
    try {
        const userId = req.userId
        const data = await foodModel.find({ userId: userId })

        res.json({
            data: data,
            message: "data fetched success",
            statusCode: 200

        }).status(200)
    } catch (error) {
        next(error)
    }
}

const createProduct = async (req, res, next) => {
    try {
        const userId = req.userId
        const productData = req.body;
        productData.userId = userId;


        const newData = new foodModel(productData)
        const data = await newData.save()
        const updatedProduct = await authSchema.findByIdAndUpdate(userId, { $push: { foodId: data._id } }, { new: true });

        res.json({
            data: data,
            message: "data Created success",
            statusCode: 200,
            updatedProduct: updatedProduct
        }).status(200)
    } catch (error) {
        next(error)
    }
}
const editProduct = async (req, res, next) => {
    try {
        const id = req.params.id

        // const filter = req.params.id
        // const update = req.body
        // const data = await foodModel.findOneAndUpdate(filter, update);
        res.json({
            data: data,
            message: "data Created success",
            statusCode: 200

        }).status(200)
    } catch (error) {
        next(error)
    }
}
const deleteProduct = async (req, res, next) => {
    try {

        const filter = req.params.id
        const update = req.body
        const data = await foodModel.findOneAndUpdate(filter, update);
        res.json({
            data: data,
            message: "data Created success",
            statusCode: 200

        }).status(200)
    } catch (error) {
        next(error)
    }
}
module.exports = { getProduct, createProduct, deleteProduct, editProduct }

const productModel = require("../model/MenuSchema")
const getProduct = async (req, res, next) => {
    try {
        const data = await productModel.find()
        res.json({
            data: data,
            message: "data fetched success",
            statusCode: 200

        }).status(200)
    } catch (error) {
        next(err)
    }
}

const createProduct = async (req, res, next) => {
    try {
        res.json({ data: "hai" })
    } catch (error) {
        next(err)
    }
}
const editProduct = () => {
    try {
        res.json({ data: "hai" })
    } catch (error) {
        next(err)
    }
}
const deleteProduct = () => {
    try {
        res.json({ data: "hai" })
    } catch (error) {
        next(err)
    }
}
module.exports = { getProduct, createProduct, deleteProduct, editProduct }
const express = require("express")
const { getProduct, createProduct, editProduct, deleteProduct } = require("../controller/foodController")
const { verifyToken } = require("../middlewear/authVerify")
const foodRoute = express.Router()

/**
 * @swagger
 * tags:
 *   name: Food
 *   description: API for managing Food
 * components:
 *   schemas:
 *     FoodSchema:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - rating
 *         - ingredient
 *         - time
 *         - difficulty
 *         - calory
 *         - color
 *         - description
 *       properties:
 *         id:
 *           type: number
 *           description: The id is required
 *         name:
 *           type: string
 *           description: name of the recipe
 *         image:
 *           type: string
 *           description: Image of the Food
 *         price:
 *           type: number
 *           description: Price of the Food (required)
 *         discountPercentage:
 *           type: number
 *           description: Discount percentage for the Food
 *         rating:
 *           type: number
 *           description: rating for the food 
 *         ingredient:
 *           type: array
 *           description: Stock quantity of the Food
 *         time:
 *           type: string
 *           description: Brand of the Food
 *         difficulty:
 *           type: string
 *           description: Category of the Food
 *         calory:
 *           type: string
 *           description: URL of the Food thumbnail image
 *         description:
 *           type: string
 *           description: URL of the Food thumbnail image
 */

/**
 * @swagger
 * /get-product:
 *   get:
 *     summary: Get all Food
 *     tags: [Food]
 *     responses:
 *       200:
 *         description: Food retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/FoodSchema'
 *       500:
 *         description: Some server error
 */


foodRoute.get("/get-product", verifyToken, getProduct)

foodRoute.post("/create-product", verifyToken, createProduct)
foodRoute.put("/edit-product/:id", verifyToken, editProduct)

foodRoute.delete("/delete-product", verifyToken, deleteProduct)

module.exports = { foodRoute }
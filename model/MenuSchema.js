const mongoose = require("mongoose")



const FoodSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    image: { type: String, default: "" },
    rating: { type: Number },
    ingredient: { type: [String], required: true },
    time: { type: Number, required: true },
    difficulty: { type: String, enum: ['easy', 'medium', 'hard'], required: true },
    calory: { type: Number },
    color: { type: String, default: "gray" },
    description: { type: String, require },
    category: { type: String, enum: ['veg', 'nonVeg'], required: true },
    favorite: { type: Boolean, default: false },
    otherImages: { type: [String] },
    meals: { type: String, enum: ["breakfast", "lunch", "dinner", "NonMeal"], default: "NonMeal" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },

}, {
    timestamps: true
})


module.exports = mongoose.model("fooddetail", FoodSchema)


const mongoose = require("mongoose")



const productSchema = new mongoose.Schema({
    id: { type: Number, required: true }
    , name: { type: String, required: true },
    image: { type: String, default: "" },
    rating: { type: Number },
    ingredient: { type: [String], required: true },
    time: { type: String },
    difficulty: { type: String },
    calory: { type: String },
    color: { type: String, default: "gray" },
    description: { type: String, require }


}, {
    timestamps: true
})


module.exports = mongoose.model("Products", productSchema)


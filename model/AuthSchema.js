const { default: mongoose } = require("mongoose");

const authSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    foodId: { type: [mongoose.Schema.Types.ObjectId], ref: 'fooddetail', default: [] },

})
module.exports = mongoose.model("users", authSchema)
const { default: mongoose } = require("mongoose");
require("dotenv").config()

const connectDataBase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL_CLOUD)
        console.log("Mongo Cloud connected successfully 😊");

    }
    catch (err) {

        console.log("Mongo Cloud connection Failed 😓");
    }
}

module.exports = { connectDataBase }
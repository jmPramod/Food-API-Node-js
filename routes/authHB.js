const express = require("express")
const { resetPasswordGet, resetPasswordPost } = require("../controller/authHB.controller")
const authHB = express.Router()
authHB.get("/", (req, res) => {
    res.send("working")
})

authHB.get("/reset-password/:id/:token", resetPasswordGet)
authHB.post("/reset-password/:id/:token", resetPasswordPost)

module.exports = { authHB }
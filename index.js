const express = require("express")
const app = express()
require("dotenv").config()
const port = process.env.PORT
const cors = require("cors")
const { productRoute } = require("./routes/productRoutes")
const { connectDataBase } = require("./config/Db")
const corsOption = {
    origin: "*",
    credentials: true,
}
app.use(cors(corsOption));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use("/", productRoute)
app.use((err, req, res, next) => {

    const statusCode = err.status || 500;
    const errorMessage = err.message || 'Something went wrong!!!!';

    return res.status(500).json({
        Success: false,
        status: statusCode,
        message: errorMessage,
        stacks: err.stack,
    });
});
connectDataBase()
app.listen(port, () => {
    console.log(`port running on http://localhost:${port}/ `);
})
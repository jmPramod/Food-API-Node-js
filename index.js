const express = require("express")
const app = express()
require("dotenv").config()
const port = process.env.PORT
const cors = require("cors")
const { foodRoute } = require("./routes/foodRoutes")
const { connectDataBase } = require("./config/Db")

const swaggerUI = require("swagger-ui-express")
const { SwaggerUIBundle, SwaggerUIStandalonePreset } = require('swagger-ui-dist');
const { swaggerSpec, CSS_URL } = require("./config/swaggerFiles")
const { authRoute } = require("./routes/authRoute")




const corsOption = {
    origin: "*",
    credentials: true,
}
app.use(cors(corsOption));
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec, { customCssUrl: CSS_URL }))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use("/", foodRoute)

app.use("/", authRoute)
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
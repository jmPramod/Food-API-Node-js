const swaggerUI = require("swagger-ui-express")
const swaggerJSDoc = require("swagger-jsdoc")

require('dotenv').config();
const port = process.env.PORT;

const BaseURL = process.env.Base_URL_BE;
const swaggerOption = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Food API's with Authentication",
            version: "1.0.0",
            description: "This is simple CRUD api with the Authentication , user need to login to do any CRUD operation on Food menu, i have use Populate for this method",
            contact: {
                name: "Pramod",
                url: "pramod.com",
                email: "pramodjm4@gmail.com"

            }
        },
        servers: [{ url: `http://localhost:${port}/`, description: " local host" }, { url: BaseURL, description: " hosted host" }]
    },
    apis: ["./routes/*.js"]

}

const CSS_URL =
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

const swaggerSpec = swaggerJSDoc(swaggerOption)


module.exports = { swaggerSpec, CSS_URL }
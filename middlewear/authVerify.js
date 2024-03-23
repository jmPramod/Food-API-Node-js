const jwt = require('jsonwebtoken');
const createError = require('../errorHandler/errorHandle');
require("dotenv").config()
const verifyToken = (req, res, next) => {

    const token = req.header('Authorization');
    if (!token) return next(createError(401, 'Access denied. No token provided.'))
    try {

        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.userId = decoded.userId;
        next();
    } catch (error) {

        return createError(400, error)
    }
};

module.exports = { verifyToken }
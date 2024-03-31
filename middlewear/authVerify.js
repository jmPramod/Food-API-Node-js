const jwt = require('jsonwebtoken');
const createError = require('../errorHandler/errorHandle');
require("dotenv").config()
const verifyToken = (req, res, next) => {
    // console.log();
    const authorizationHeader = req.header('Authorization');
    if (!authorizationHeader) return next(createError(401, 'Access denied. No token provided.'));
    const tokenArray = authorizationHeader.split(' ');
    if (tokenArray.length !== 2 || tokenArray[0] !== 'Bearer') {
        return next(createError(401, 'Invalid authorization header format.'));
    }
    const token = tokenArray[1];
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
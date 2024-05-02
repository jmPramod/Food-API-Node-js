const createError = (statusCode, message) => {
    const error = new Error();
    error.status = statusCode;
    error.message = message;
    error.data = null

    return error;
};
module.exports = createError;

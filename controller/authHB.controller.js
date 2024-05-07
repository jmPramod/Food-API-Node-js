

const createError = require('../errorHandler/errorHandle');
const authSchema = require('../model/AuthSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const resetPasswordGet = async (req, res, next) => {
    try {
        const { id, token } = req.params;
        const payload = jwt.verify(token, process.env.SECRET_KEY);
        console.log("id", id);
        const userExist = await authSchema.findById({ _id: id });
        console.log("userExist", userExist);
        if (!userExist) {
            res.render('auth/resetPassword', { id: id, token: token, payload });
            console.log("error1");
            res.render('404Error', { wrongLink: "Invalid link" });
        }
        if (payload) {
            res.render('auth/resetPassword', { id: id, token: token, payload });
        }
    } catch (error) {
        console.log("error2");


        if (error instanceof jwt.JsonWebTokenError || error instanceof jwt.TokenExpiredError) {
            res.render('404Error', { error: "This link has expired" });
        }
        else {

            res.render('404Error', { error: error });
        }
    }
}

const resetPasswordPost = async (req, res, next) => {
    try {
        const { id, token } = req.params;
        const payload = jwt.verify(token, process.env.SECRET_KEY);
        console.log();
        const saltRounds = 10;
        const hashPass = await bcrypt.hash(req.body.enterPassword, saltRounds);
        const userExist = await authSchema.findOneAndUpdate(
            { email: payload.email },
            { password: hashPass.toString() }
        );
        if (!userExist) {
            res.render('404Error');
        }
        res.render('auth/success');
    } catch (err) {


        res.render('404Error', { error: err });
    }
}


module.exports = { resetPasswordGet, resetPasswordPost }
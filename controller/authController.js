const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authSchema = require('../model/AuthSchema');
const createError = require('../errorHandler/errorHandle');
require("dotenv").config()
const registerController = async (req, res, next) => {

    try {
        const { firstName, lastName, email, password } = req.body;
        const saltRounds = 10;
        const hashPass = await bcrypt.hash(password, saltRounds);

        const user = new authSchema({ firstName, lastName, email, password: hashPass });
        let data = await user.save();

        res.json({
            data: data,
            message: "data Created success",
            statusCode: 200

        }).status(200)
    }
    catch (err) {
        next(err)
    }

}

const loginController = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        //validation 
        const userExist = await authSchema.findOne({ email })
        console.log("userExist", userExist);


        if (!userExist) {
            return next(createError(404, 'Invalid User.'));
        }
        const isPassword = await bcrypt.compare(password, userExist.password);
        if (!isPassword) {
            return next(createError(404, 'Invalid Password.'));
        }
        const token = jwt.sign(
            { email: userExist.email, userId: userExist._id },
            process.env.SECRET_KEY, { expiresIn: '90d' }
        );
        res.header('Authorization', `${token}`);
        // console.log("token", token);
        const data = await authSchema.find({ email: email })
            .populate('foodId')

        const userData = { name: userExist.name, email, Authorization: token };
        res.status(200).json({
            message: 'User logged in successfully.',
            data: userData,
        });
    }
    catch (err) {
        next(err)
    }
}


module.exports = { registerController, loginController }
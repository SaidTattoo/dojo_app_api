
const userModel = require('../models/user.js')
const { httpError } = require("../helpers/handleError");
const { encrypt, compare } = require('../helpers/handleBcrypt.js');
const { tokenSign } = require('../helpers/generateToken.js');

const loginCtrl = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            throw new Error('User not found')
        }
        const checkPassword = await compare(password, user.password);
        const tokenSession = await tokenSign(user);
        if (!checkPassword) {
            throw new Error('Password incorrect')
        }
        res.send({ tokenSession, user })
    } catch (error) {
        httpError(res, error)
    }
}

const registerCtrl = async  (req, res) => {
    try {
        const { name, email, password, age, weigth, role } = req.body;
        const passwordHash = await encrypt(password);
        const userObject = { name, email, password: passwordHash, age, weigth, role };
        const result = await userModel.create(userObject);
        res.send(result);
    } catch (error) {
        httpError(res, 'error');
    }
}

module.exports = {
  loginCtrl,
  registerCtrl
}

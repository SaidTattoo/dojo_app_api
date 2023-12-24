const { httpError } = require("../helpers/handleError");
const userModel = require('../models/user.js')
const enrollModel = require('../models/enrollment.js')
const getUsers =async (req, res) => {
    try {
      const listAll = await userModel.find({})
      res.send({ data: listAll })
  } catch (e) {
     httpError(res, e)
  }
};

const createUser = async (req, res) => {

  try {
    const { name , email , password, age, weigth, role } = req.body;

    const result = await userModel.create({ name , email , password, age, weigth, role });
    res.send({result})
  }catch(err) {
    httpError(res,err);
  }
};


const enrollUser = async (req, res) => {
  console.log('enroll')
  try {
    const { userID , classID , enrollmentType } = req.body;
    const result = await enrollModel.create({ userID , classID , enrollmentType });

    res.send({result})
  }catch(err) {
    httpError(res,err);
  }
}


const removeAll = async () => {
  try {
    await userModel.deleteMany({})
  } catch (e) {
    httpError(res, e)
  }
}


module.exports = {
    enrollUser,
    getUsers,
    createUser,
    removeAll
}
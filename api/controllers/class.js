const { httpError } = require('../helpers/handleError.js')
const classModel = require('../models/class.js')

const getClassByDojo = async (req, res) => {
    try {
        const listAll = await classModel.find({})
        res.send({ data: listAll })
    } catch (e) {
        httpError(res, e)
    }
}

const createClassByDojo = async (req, res) => {
    try {
        const { name, schedule, dojoID } = req.body;
        const result = await classModel.create({ name, schedule, dojoID });
        res.send({ result });
    } catch (err) {
        httpError(res, err);
    }
};


module.exports = {
    getClassByDojo,
    createClassByDojo
}
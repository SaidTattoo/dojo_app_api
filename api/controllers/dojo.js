
const dojoModel = require('../models/dojo.js')
const { httpError } = require("../helpers/handleError");

//obtener todos los dojos para la vista inicial al instalar la aplicacion,
//poder buscar el dojo al que quiere inscribirse el usuario
const getAllDojos = async (req, res) => {
    try {
        const listAll = await dojoModel.find({});
        res.send({ data: listAll });
    } catch (e) {
        httpError(res, e);
    }
};

const createDojo = async (req, res) => {
    try {
        const { name, location, adminID } = req.body;
        const result = await dojoModel.create({ name, location, adminID });
        res.send({ result });
    } catch (err) {
        httpError(res, err);
    }
};

const viewDojo = async (req, res) => {
   /* TODO: obtener un dojo en especifico para la vista de dojo */
};



module.exports = {
    getAllDojos,
    createDojo
}


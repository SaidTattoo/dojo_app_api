const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dojoSchema = new Schema({
    // Nombre del Dojo
    name: {
        type: String,
        required: true
    },
    // Ubicación del Dojo
    location: {
        type: String,
        required: true
    },
    adminID: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    // Referencia al modelo User para el administrador del Dojo

}, {
    timestamps: true // Opcional: añade campos automáticos para createdAt y updatedAt
});

// Crear el modelo Dojo basado en el esquema


module.exports = mongoose.model('dojo', dojoSchema)
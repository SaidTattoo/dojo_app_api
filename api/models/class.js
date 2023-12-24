const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
    // Nombre de la clase
    name: {
        type: String,
        required: true
    },
    // Horario de la clase
    schedule: {
        type: String,
        required: true
    },
    // Referencia al modelo Dojo para el Dojo que ofrece la clase
    dojoID: {
        type: Schema.Types.ObjectId,
        ref: 'dojo',
        required: true
    }
}, {
    timestamps: true // Opcional: añade campos automáticos para createdAt y updatedAt
});


module.exports =  mongoose.model('class', classSchema);

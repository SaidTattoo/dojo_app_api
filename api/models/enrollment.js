const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const enrollmentSchema = new Schema({

    userID: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },

    classID: {
        type: Schema.Types.ObjectId,
        ref: 'class',
        required: true
    },

    enrollmentType: {
        type: String,
        enum: ['tres_dias_a', 'tres_dias_b', 'semana_completa', 'acondicionamiento_fisico', 'full'],
        required: true
    }
}, {
    timestamps: true
});

// Crear el modelo Enrollment basado en el esquema
const Enrollment = mongoose.model('enrollment', enrollmentSchema);

module.exports = Enrollment;
const mongoose = require('mongoose')

const UserScheme = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String
    },

    password: {
        type: String
    },
    role: {
        type: String,
        default: 'user'
    },weigth: {
        type: Number
    },
},
    {
        timestamps: true,
        versionKey: false
    })

module.exports = mongoose.model('users', UserScheme)
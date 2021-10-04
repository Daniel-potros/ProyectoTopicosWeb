const { Schema, model } = require('mongoose')

const meseroSchema = new Schema ({
    turno: String,
    usuario: String,
    password: String,
    cargo: String
})

module.exports = model ('Mesero', meseroSchema)
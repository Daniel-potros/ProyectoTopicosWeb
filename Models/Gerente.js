const { Schema, model } = require('mongoose')

const gerenteSchema = new Schema ({
    turno: String,
    usuario: String,
    password: String,
    cargo: String
})

module.exports = model ('Gerente', gerenteSchema)
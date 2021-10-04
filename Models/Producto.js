const { Schema, model } = require('mongoose')

const productoSchema = new Schema ({
    id_producto: String,
    nombre: String,
    precio: Number,
    tipo: Number,
    id_gerente: Number
})

module.exports = model ('Producto', productoSchema)
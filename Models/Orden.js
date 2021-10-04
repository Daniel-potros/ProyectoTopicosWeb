const { Schema, model } = require('mongoose')
const Mesero = require('./Mesero')
const Producto = require('./Producto')

const ordenSchema = new Schema ({
    id_orden: Number,
    id_mesero: Number,
    fechaOrden: Date,
    precioTotalOrden: Number,
    estado: Boolean,
    id_detalleOrden: Number
})

module.exports = model ('Orden', ordenSchema)
const { Schema, model } = require('mongoose')

const detalleOrdenSchema = new Schema ({
    id_detalleOrden: Number,
    id_orden: Number,
    id_producto: Number
})

module.exports = model ('detalleOrden', detalleOrdenSchema)
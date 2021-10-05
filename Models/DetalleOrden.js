const { Schema, model } = require('mongoose')

const detalleOrdenSchema = new Schema ({
    id_orden: Number,
    id_producto: Number
})

module.exports = model ('detalleOrden', detalleOrdenSchema)
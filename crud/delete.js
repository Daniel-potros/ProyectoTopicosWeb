require('../database');

const Producto = require('../models/Producto')
const Orden = require('../models/Orden')
//const Mesero = require('../Models/Mesero')
const Gerente = require('../Models/Gerente')
const DetalleOrden = require('../Models/DetalleOrden');


async function deleteProducto() {
    const result = await Producto.deleteOne({nombre: 'birria'}) 

    console.log(result)
}

deleteProducto()

async function deleteOrden() {
    const orden = await Orden.deleteOne({fechaOrden: 10/04/2021})

    console.log(orden)
}

deleteOrden()

async function deleteMesero() {
    const mesero = await Mesero.deleteOne({usuario: 'felipe123'})

    console.log(mesero)
}

/*
deleteMesero()

async function deleteGerente() {
    const gerente = await Gerente.deleteOne({usuario: 'gerente123'})

    console.log(gerente)
}
*/

deleteGerente()

async function deleteDetalleOrden(){
    //const detalle = DetalleOrden.deleteOne()
}

deleteDetalleOrden()
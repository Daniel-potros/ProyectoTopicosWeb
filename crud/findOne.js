require('../database');

const Producto = require('../models/Producto')
const Orden = require('../models/Orden')
//const Mesero = require('../Models/Mesero')
const Gerente = require('../Models/Gerente')
const DetalleOrden = require('../Models/DetalleOrden');

async function getProducto() {
    const producto = await Producto.findOne({nombre: 'taco'});
    console.log(producto)
}

getProducto()

async function getOrden() {
    const orden = await Orden.findOne({fechaOrden: 10/04/2021})

    console.log(orden)
}

getOrden()

/*
async function getMesero() {
    const mesero = await Mesero.findOne({usuario: 'felipe123'})

    console.log(mesero)
}


getMesero()
*/

async function getGerente() {
    const gerente = await Gerente.findOne({usuario: 'gerente123'})

    console.log(gerente)
}

getGerente()

async function getDetalleOrden(){
    const detalle = DetalleOrden.findOne()
}

getDetalleOrden()
require('../database');

const Producto = require('../models/Producto')
const Orden = require('../models/Orden')
//const Mesero = require('../Models/Mesero')
const Gerente = require('../Models/Gerente')
const DetalleOrden = require('../Models/DetalleOrden');


async function updateProducto() {
    const producto = await Producto.updateOne({nombre: 'birria'}, {
        precio: 25
    }) 

    console.log(producto)
}

updateProducto()

async function updateOrden() {
    const orden = await Orden.updateOne({fechaOrden: 10/04/2021}, {
        estado: false
    })

    console.log(orden)
}

updateOrden()

/*
async function updateMesero() {
    const mesero = await Mesero.updateOne({usuario: 'felipe123'}, {
        turno: 'matutino',
    })

    console.log(mesero)
}


updateMesero()
*/

async function updateGerente() {
    const gerente = await Gerente.updateOne({usuario: 'gerente123'}, {
        turno: 'matutino',
    })

    console.log(gerente)
}

updateGerente()

async function updateDetalleOrden(){
    const detalle = DetalleOrden.updateOne({
       
    })
}

updateDetalleOrden()
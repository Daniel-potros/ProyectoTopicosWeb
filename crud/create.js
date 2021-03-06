require('../database');

const Producto = require('../models/Producto')
const Orden = require('../models/Orden')
//const Mesero = require('../Models/Mesero')
const Gerente = require('../Models/Gerente')
const DetalleOrden = require('../Models/DetalleOrden');

export class Create {
    
    constructor() {}

    async createProducto() {
        const producto = new Producto({
            nombre: 'birria',
            precio: 40,
            tipo: 1,
            id_gerente: 2
        })
        await producto.save()
        console.log(producto)
    }

    async createOrden() {
        const orden = new Orden({
            id_mesero: 1,
            fechaOrden: 10/04/2021,
            precioTotalOrden: 130.20,
            estado: true,
            id_detalleOrden: 2
        })
    
        await orden.save()
        console.log(orden)
    }

    /*
    async  createMesero() {
    const mesero = new Mesero({
        turno: 'tarde',
        usuario: 'felipe123',
        password: '213@a',
        cargo: 'servir bebidas'
    })

    await mesero.save()
    console.log(mesero)
    }

    createMesero()
    */

    async createGerente() {
        const gerente = new Gerente({
            turno: 'tarde',
            usuario: 'gerente123',
            password: 'elmejorgerente@',
            cargo: 'desconocido'
        })
        await gerente.save()
        console.log(gerente)
    }

    async createDetalleOrden(){
        const detalle = new DetalleOrden({
            id_orden: 1,
            id_producto: 1
        })
        await detalle.save()
        console.log(detalle)
    }

}





createProducto()



createOrden()





createGerente()



createDetalleOrden()

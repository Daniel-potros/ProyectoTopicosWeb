require('../database');

const Producto = require('../models/Producto')

async function main() {
    const productos = await Producto.find()
    console.log(productos)
}

main()
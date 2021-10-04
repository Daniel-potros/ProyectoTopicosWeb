require('./database');

const Producto = require('./models/Producto')

const producto = new Producto({
    nombre: 'taco',
    precio: 20
})

producto.save((err, document) => {
    if (err) console.log(err);
    console.log(document)
})

console.log(producto)
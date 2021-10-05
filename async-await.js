require('./database');

const Producto = require('./models/Producto')

async function main() {
    const producto = new Producto({
        nombre: 'pozole',
        precio: 50,
        tipo: 2,
        id_gerente: 1
    })

    const productSaved = await producto.save();
    console.log(productSaved)
}

main()
    .then(productSaved => console.log(productSaved))
    .catch(err => console.log(err))

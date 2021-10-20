const {Router} = require("express");
const router = Router();

const productos = require('../sample.json')
console.log(productos)

router.get('/',(req,res) => {
    res.json(productos)
})

router.post('/', (req,res) => {
    const {nombre, precio, tipo, id_gerente} = req.body
    if (nombre && precio && tipo && id_gerente) {
        res.json('saved')
    } else {
        res.send('Wrong Request')
    }
    
})

router.put('/:id', (req,res) => {
    const {id} = req.params
    const {nombre, precio, tipo, id_gerente} = req.body
    if (nombre && precio && tipo && id_gerente) {
        res.json('edited')
    } else {
        res.send('Wrong Request')
    }
    
})

router.delete('/:id', (req,res) => {
    const {id} = req.params
    const {nombre, precio, tipo, id_gerente} = req.body
    if (nombre && precio && tipo && id_gerente) {
        res.json('deleted')
    } else {
        res.send('Wrong Request')
    }
    
})

module.exports = router;
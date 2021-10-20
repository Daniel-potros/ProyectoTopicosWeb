const {Router} = require("express");
const bodyParser = require('body-parser')
const router = Router();
const jsonParser = bodyParser.json()

const productos = require('../sample.json')
console.log(productos)

router.get('/',(req,res) => {
    res.json(productos)
})

router.post('/',jsonParser, (req,res) => {
    const {nombre, precio, tipo, id_gerente} = req.body
    if (nombre && precio && tipo && id_gerente) {
        res.json('saved')
    } else {
        res.send('Wrong Request')
    }
    
})

module.exports = router;
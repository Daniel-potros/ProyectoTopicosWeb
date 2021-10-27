import {Orden} from "../Models/Orden"
const {Router} = require("express");
const router = Router();

const orden = require('../sample.json')
console.log(orden)

router.get('/',(req,res) => {
    res.json(orden)
})

router.post('/', (req,res) => {
    const {id_mesero, fechaOrden, precioTotalOrden, estado, id_detalleOrden} = req.body
    if (id_mesero && fechaOrden && precioTotalOrden && estado && id_detalleOrden) {
        res.json('saved')
    } else {
        res.send('Wrong Request')
    }
    
})

router.put('/:id', (req,res) => {
    const {id} = req.params
    const {id_mesero, fechaOrden, precioTotalOrden, estado, id_detalleOrden} = req.body
    if (id_mesero && fechaOrden && precioTotalOrden && estado && id_detalleOrden) {
        res.json('edited')
    } else {
        res.send('Wrong Request')
    }
    
})

router.delete('/:id', (req,res) => {
    const {id} = req.params
    const {id_mesero, fechaOrden, precioTotalOrden, estado, id_detalleOrden} = req.body
    if (id_mesero && fechaOrden && precioTotalOrden && estado && id_detalleOrden) {
        res.json('deleted')
    } else {
        res.send('Wrong Request')
    }
    
})

module.exports = router;
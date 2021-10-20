const express = require("express");
const router = express.Router();

router.get('/Producto/:id', (req,res) => {
    let id = req.params.id;
    let prod = obtenerProducto(id);
    res.status(200).json(prod);
});

router.get('/Productos/', (req,res) => {
    let id = req.params.id;
    let prod = obtenerProducto(id)
    res.status(200).json(prods)
    });

router.post('/Producto/', (req,res) => {
    let p = req.body;
    let prod = insertarProducto(p)
    res.status(200).json(prod)
})
module.exports = router;


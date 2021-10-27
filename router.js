const express = require('express');
const app = express()

//settings
app.set('port',3000)
app.set('json spaces',2)
app.use(express.urlencoded({extended: true}))
app.use(express.json()); 

app.listen(app.get('port'),() => {
    console.log(`Server on port ${app.get('port')}`)
})

app.get('/',(req,res) => {
    res.json({"Title": "Hello world"})
})

app.use('/api/productos',require('../services/productos.service'))
app.use('/api/orden',require('../services/orden.service'))
app.use('/api/mesero',require('../services/mesero.service'))
app.use('/api/gerente',require('../services/gerente.service'))
app.use('/api/detalleOrden',require('../services/detalleOrden.service'))



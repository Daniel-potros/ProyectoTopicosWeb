const express = require('express');
const bodyParser = require('body-parser')
const app = express()

//settings
app.set('port',3000)
app.set('json spaces',2)
app.use(express.urlencoded({extended: true}))

app.listen(app.get('port'),() => {
    console.log(`Server on port ${app.get('port')}`)
})

app.get('/',(req,res) => {
    res.json({"Title": "Hello world"})
})

app.use('/api/productos',require('../services/productos.service'))
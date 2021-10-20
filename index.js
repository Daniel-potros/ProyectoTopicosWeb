const express = require("express");
const ruteador = require("./router");
const app = express();


app.use(express.json())
app.use("/servicio",ruteador)
app.use(errorHandler)
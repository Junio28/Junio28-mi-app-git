//archivos requeridos
var express = require('express');
var morgan = require('morgan');

//instancias
const app =express();
app.use(morgan('dev'));

var UserRoutes = require('../routes/users')
var ClientRoutes = require('../routes/clients')
var ProductRoutes = require('../routes/products')
var ProductTypeRoutes = require('../routes/typeProducts')

app.use(UserRoutes)
app.use(ClientRoutes)
app.use(ProductTypeRoutes)
app.use(ProductRoutes)

//exportacion de modulos
module.exports = app

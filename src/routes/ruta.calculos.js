const {Router} = require('express')
const route = Router()
const controller = require('../controller/controlador.calculos')
const path = require("path")

route.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Origin", '191.89.249.141');
    next()
});

route.post('/fibonacci',controller.getFibonacci)
route.post('/factorial',controller.getFactorial)
route.post('/rectangulo',controller.getRectangulo)
route.post('/circulo',controller.getCirculo)
route.post('/triangulo',controller.getTriangulo)

module.exports=route
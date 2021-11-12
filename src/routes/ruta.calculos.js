const {Router} = requier('express')
const route = Router()
const controller = require('../controller/controlador.calculos')

route.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE, OPTIONS");
    next()
});

route.get('/fibonacci',controller.getFibonacci)
route.get('/factorial',controller.getFactorial)
route.get('/rectangulo',controller.getRectangulo)
route.get('/circulo',controller.getCirculo)
route.get('/triangulo',controller.getTriangulo)

module.exports=route
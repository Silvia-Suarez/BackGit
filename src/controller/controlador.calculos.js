const Calculos = {}

Calculos.getFibonacci = (req,res) => {
    var n = req.headers('numero');
    var serie = [];
    serie[0]= 0;
    serie[2]=1;
    if(!isNaN(n) && n>0 && n!== undefined){
        for (let i = 2; i <= n; i++) {
            serie[i] = serie[i - 2] + serie[i - 1];
        }
        res.status(200).json({status:"yes", nums: serie})
    }else if (n== undefined){
        res.status(400).json({status:"no", response:"Ingrese un número para el cálculo"})
    }else {
        res.status(400).json({status:"no", response:"Error en el cálculo de la serie"})
    }
}

Calculos.getFactorial = (req,res) => {
    var n = req.headers('numero')
    var res = 1
    if(!isNaN(n) && n > 0 && n!== undefined){
        for(var i=1; i<=n; i++ ){
            res = res*i;
        }
        res.status(200).json({status:"yes", fact: res})
    }else if (n== undefined){
        res.status(400).json({status:"no", response:"Ingrese un número para el cálculo"})
    }else {
        res.status(400).json({status:"no", response:"Error al calcular"})
    }

}

Calculos.getRectangulo = (req,res) => {
    var b = req.headers['base']
    var h = req.headers['altura']

    if(b !== undefined && h !== undefined && b > 0 && h > 0 && !isNaN(b) && !isNaN(h)){
        var area = b*h
        var perim = b*2+h*2

        res.status(200).json({status:"yes", area, perim})
    }else if (b== undefined || h== undefined){
        res.status(400).json({status:"no", response:"Ingrese ambos números para el cálculo"})
    }else {
        res.status(400).json({status:"no", response:"Error al calcular"})
    }
}

Calculos.getCirculo = (req,res) => {
    var r = req.headers['radio']

    if(r !== undefined && r > 0 && !isNaN(r)){
        var area = Math.PI*Math.pow(r,2)
        var perim = 2*Math.PI*r

        res.status(200).json({status:"yes", area, perim})
    }else if (n!== undefined){
        res.status(400).json({status:"no", response:"Ingrese un número para el cálculo"})
    }else {
        res.status(400).json({status:"no", response:"Error al calcular"})
    }

}

Calculos.getTriangulo = (req,res) => {
    var base = req.headers['base']
    var altura = req.headers['altura']
    var lado1 = req.headers['lado1']
    var lado2 = req.headers['lado2']

    if(base !== undefined && base > 0 && altura !== undefined && lado1 !== undefined && lado1 > 0 && lado2 !== undefined && lado2 > 0 && altura > 0 && !isNaN(base) && !isNaN(altura) && !isNaN(lado1) && !isNaN(lado2)){
        var area = base*altura/2
        var perim = base+lado1+lado2

        res.status(200).json({status:"yes", area, perim})
    }else if (n!== undefined){
        res.status(400).json({status:"no", response:"Ingrese un número para el cálculo"})
    }else {
        res.status(400).json({status:"no", response:"Error al calcular"})
    }
}


module.exports = Calculos
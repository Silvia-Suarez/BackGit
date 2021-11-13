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
        var per = b*2+h*2

        res.status(200).json({status:"yes", area, per: per})
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
        var per = 2*Math.PI*r

        res.status(200).json({status:"yes", area, per: per})
    }else if (r== undefined){
        res.status(400).json({status:"no", response:"Ingrese un número para el cálculo"})
    }else {
        res.status(400).json({status:"no", response:"Error al calcular"})
    }
}

Calculos.getTriangulo = (req,res) => {
    var a = req.headers['ladoa']
    var b = req.headers['ladobase']
    var c = req.headers['ladoc']
    var h = req.headers['altura']

    if(a!== undefined && b!== undefined && c!== undefined && h!== undefined
        && a > 0 && b > 0 && c > 0 && h > 0
        && !isNaN(a) && !isNaN(b)&& !isNaN(c) && !isNaN(h) ){
        var area = b*h/2
        var per = a+b+c

        res.status(200).json({status:"yes", area, per: per})
    }else if (n!== undefined){
        res.status(400).json({status:"no", response:"Ingrese un número para el cálculo"})
    }else {
        res.status(400).json({status:"no", response:"Error al calcular"})
    }
}


module.exports = Calculos
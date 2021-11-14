const Calculos = {}

Calculos.getFibonacci = (req, res) => {
    var n = req.body.numero;
    var serie = [];
    serie[0] = 0;
    serie[1] = 1;
    if (!isNaN(n) && n >= 0 && n !== undefined && n<=1000) {
        for (var i = 2; i <= n; i++) {
            serie[i] = serie[i - 2] + serie[i - 1];
        }
        res.status(200).json({status: "yes", nums: serie})
    } else if (n == undefined) {
        res.status(400).json({status: "no", response: "Ingrese un número para el cálculo"})
    } else {
        res.status(400).json({status: "no", response: "Error en el cálculo de la serie"})
    }
}

Calculos.getFactorial = (req, res) => {
    var n = req.body.numero
    var resul = 1
    if (!isNaN(n) && n >= 0 && n !== undefined && n<=170) {
        for (var i = 1; i <= n; i++) {
            resul = resul * i;
        }
        res.status(200).json({status: "yes", fact: resul})
    } else if (n == undefined) {
        res.status(400).json({status: "no", response: "Ingrese un número para el cálculo"})
    } else {
        res.status(400).json({status: "no", response: "Error al calcular"})
    }
}

Calculos.getRectangulo = (req, res) => {
    var b = req.body.base
    var h = req.body.altura

    if (b !== undefined && h !== undefined && b >= 0 && h >= 0 && !isNaN(b) && !isNaN(h)) {

        var area = b * h
        var per = b * 2 + h * 2

        res.status(200).json({status: "yes", area: area, per: per})
    } else if (b == undefined || h == undefined) {
        res.status(400).json({status: "no", response: "Ingrese ambos números para el cálculo"})
    } else {
        res.status(400).json({status: "no", response: "Error al calcular"})
    }
}

Calculos.getCirculo = (req, res) => {
    var r = req.body.radio

    if (r !== undefined && r >= 0 && !isNaN(r)) {
        var area = Math.PI * Math.pow(r, 2)
        var per = 2 * Math.PI * r

        res.status(200).json({status: "yes", area: area, per: per})
    } else if (r == undefined) {
        res.status(400).json({status: "no", response: "Ingrese un número "})
    } else {
        res.status(400).json({status: "no", response: "Error al calcular"})
    }
}

Calculos.getTriangulo = (req, res) => {
    var a = parseInt(req.body.ladoa)
    var b = parseInt(req.body.ladob)
    var c = parseInt(req.body.ladoc)

    if (a !== undefined && b !== undefined && c !== undefined
        && a > 0 && b > 0 && c > 0
        && !isNaN(a) && !isNaN(b) && !isNaN(c)) {
        var per = a + b + c;
        var sp = per / 2;
        var area = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));
        if ((a != 0 || b != 0 || c != 0) && isNaN(area)) {
            res.status(400).json({status: "no", response: "Estas medidas no cumplen con las propiedades de un triángulo"})
        } else
            res.status(200).json({status: "yes", area: area, per: per})
    } else if (a == undefined && b == undefined && c == undefined) {
        res.status(400).json({status: "no", response: "Llene todos los campos"})
    } else {
        res.status(400).json({status: "no", response: "Error al calcular"})
    }
}


module.exports = Calculos
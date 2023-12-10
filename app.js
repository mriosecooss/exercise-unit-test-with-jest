//Declaro la funcion EuroToDollar
const fromEuroToDollar = function (valueInEuro) {
    //Convierto
    let valueInDollar = valueInEuro * 1.07;
    //Retorno
    return valueInDollar;
}
module.exports = { fromEuroToDollar };
console.log(fromEuroToDollar(3.5));


//Declaro la funcion DollarToYen
const fromDollarToYen = function (valueInDollar) {
    //Convierto
    let valueInYen = valueInDollar * 156.5;
    //Retorno
    return valueInYen;
}
module.exports = { fromDollarToYen };
console.log(fromDollarToYen(1547));


//Declaro la funcion DollarToPound
const fromDollarToPound = function (valueInDollar) {
    //Convierto
    let valueInPound = valueInDollar * 0.8;
    //Retorno
    return valueInPound;
}
module.exports = { fromDollarToPound };
console.log(fromDollarToPound(175));
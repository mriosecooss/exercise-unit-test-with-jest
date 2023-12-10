test("One euro should be 1.07 dollars", function () {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});


test("One dolar should be 156.5 Yens", function () {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromDollarToYen(1547);

    // Si 1 Dollar son 156.5 yenes, entonces 3.5 Dolares debe ser (1547 * 156.5)
    const expected = 1547 * 156.5;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected);
});


test("One dolar should be 0.8 pounds", function () {
    // importo la funcion desde app.js
    const { fromDollarToPound } = require('./app.js');

    // Uso la funcion como debe ser usada
    const dollars = fromDollarToPound(175);

    //Si 1 Dollar son 0.8 Pounds, entonces 10 dolares deben ser (10 * 0.8)
    const expected = 175 * 0.8;

    //hago mi comparacion
    expect(dollars).toBe(expected);
})
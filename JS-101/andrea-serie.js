(function () {
    "use strict";
    // Serie del 1 al 10

    let serie;
    let numero;

    do {
        numero = prompt('Escribe un número arriba de 1');
        if (isNaN(numero) || (numero <= 1)) {
            console.error('Your ', numero, ' is not valid. Please enter valid number');
        }
    } while (isNaN(numero) || (numero <= 1));

    for (let serie = 1; serie <= numero; serie = serie + 1){
        console.log (serie)
}
}());

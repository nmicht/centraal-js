(function () {
    'use strict';

    /**
    Serie del uno al diez en consola
    */

    let numero;
    let counter = 1;

    do {
        numero = prompt('Escribe un numero mayor a 1');
        if (isNaN(numero) || numero <= 1) {
            console.error('El valor', numero, 'no es valido');
        }
    } while (isNaN(numero) || numero <= 1);


    for (counter; counter <= numero; counter += 1) {
        console.log(counter);
    }
}());

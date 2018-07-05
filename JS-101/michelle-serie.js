"use strict";
/**
 * Serie desde el 1 hasta otro numero que el usuario define.
 *
 * Si el usuario no entrega un numero real, el sistema lo sigue
 * pidiendo hasta que da un numero real.
 */

let end;

do {
    end = prompt("Hasta que numero quieres la serie? (mayor a 1)");
    if (isNaN(end) || end <= 1) {
        console.error('Numero no valido');
    }
} while (isNaN(end) || end <= 1);

for (let serie = 1; serie <= end; serie++) {
    console.log(serie);
}

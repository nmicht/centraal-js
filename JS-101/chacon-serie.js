"use strict";
/*
El programa muestra en la consola la serie del 1 al numero que el usuario elija
*/
let counter;
let chosen;
do {
    chosen = prompt('Type a number');
    if (isNaN(chosen) || (chosen <= 1)) {
        console.error('Type a valid number above 0');
    }
} while (isNaN(chosen) || (chosen <= 1));
for (counter = 1; counter <= chosen; counter += 1) {
    console.log(counter);
}

// Serie del 1 al 10

var serie;
var numero;

do {
    numero = prompt('Escribe un número arriba de 1');
    if (isNaN(numero) || (numero <= 1)) {
        console.error('Your ', numero, ' is not valid. Please enter valid number');
    }
} while (isNaN(numero) || (numero <= 1));

for (var serie = 1; serie <= numero; serie = serie + 1){
    console.log (serie)
}
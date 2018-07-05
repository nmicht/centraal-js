'use strict';

/*
programa que calcula el total a pagar por un tipo de producto
-pregunta el precio.
-la cantidad de artículos.
-calcula el subtotal.
-desglosa el iva.
-entrega en la consola el total a pagar.

Entradas: cantidad de producto
Proceso: cp X pre, eso *16%, suma.
Salida:

      Subtotal: $000,000.00
      IVA: $000,000.00
      Total: $000,000.00
*/

let price;
let quantity;
let subtotal;
let tax;
let total;
let error = 0;

do {
  price = prompt('Type the price of the product');
  if (isNaN(price)) {
    console.error(price, 'is not a valid price');
    error = error + 1;
  }
} while (isNaN(price));

do {
  quantity = prompt('How many products did you buy?');
  if (isNaN(quantity)) {
    console.error(quantity, 'is not a valid quantity');
    error = error + 1;
  }
} while (isNaN(quantity));


//Convertir a números

price = Number(price);
quantity = Number(quantity);

subtotal = price * quantity;
tax = subtotal * .16;
total = subtotal + tax;
//Salidas
console.warn('Failed attempts', error);
console.log('Thanks for your purchase.');
console.log('Subtotal: $', subtotal);
console.log('Tax: $', tax);
console.log('Total: $', total);

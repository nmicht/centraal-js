/*
Programa que calcula el total a pagar
-pregunta el precio
-pregunta la cantidad de artículos
-calcula el subtotal
-desglosa el IVA
-entrega en la consola el total a pagar

Entradad: cantidad de productos, el precio
Proceso: cp x pre, eso x 16 %, suma
Salida:
        GRACIAS POR TU COMPRA
        SubTotal: $000,000.00
        IVA: $000,000.00
        Total: $000,000.00
*/

var price;
var quantity;
var subtotal;
var tax;
var total;
var stupid = 0;

do {
  price = prompt('Escribe el precio del producto');
  if (isNaN(price)){
    stupid++;
    console.error('El valor', price, 'no es un precio válido');
  }
} while (isNaN(price));

do {
  quantity = prompt('¿Cuántos productos compraste?');
  if (isNaN(quantity)){
    stupid++;
    console.error('El valor', quantity, 'no es un precio válido');
  }
} while (isNaN(quantity));

console.warn('Tu nivel de stupidez es', stupid);

//Convertir a números

subtotal = price * quantity;
tax = subtotal * .16;
total = subtotal + tax;

console.log('GRACIAS POR SU COMPRA');
console.log('Subtotal: $', subtotal);
console.log('IVA: $', tax);
console.log('Total: $', total);
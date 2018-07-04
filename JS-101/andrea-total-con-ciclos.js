    /*
    programa que calcula el total a pagar por un tipo de producto
    - pregunta precio
    - pregunta la cantidad de articulos
    - calcula el subtotal
    - desglosa el iva
    - entrega en la consola el total a pagar
    
    Entradas: precio, cantidad de productos,
    Proceso: cantprod x precio, esp x 16%, suma
    Salida: 
        GRACIAS POR TU COMPRA
        subtotal: $000,000.00
        iva: $000,000.00
        total: $000,000.00
    */

var price;
var quantity;
var subtotal;
var tax;
var total;
var totalestupido = 0;

do {
    price = prompt('Escribe el precio del producto');
    if (isNaN(price)) {
        totalestupido = totalestupido + 1;
        console.error('Your ', price, ' is not valid. Please enter valid number');
    }
} while (isNaN(price));


do {
    quantity = prompt('Cuántos productos compraste?');
    if (isNaN(quantity)) {
        totalestupido++;
        console.error('Your ', quantity, ' is not valid. Please enter valid number');
    }
} while (isNaN(quantity));

console.warn('tus intentos fallidos son:', totalestupido);

//Convertir  NUMEROS
price = Number(price);
quantity = Number(quantity);

subtotal = price * quantity;
tax = subtotal * .16;
total = subtotal + tax;

console.log('GRACIAS POR TU COMPRA');
console.log('subtotal: $', subtotal);
console.log('iva: $', tax);
console.log('total: $', total);


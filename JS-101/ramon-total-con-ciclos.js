
/**
    Programa que calcula el total a pagar por un tipo de producto
    - pregunta el precio
    - pregunta la cantidad de articulos
    - calcula el subtotal
    - desglosa el iva
    - entrega en la consola el total a pagar

    Entradas: Cantidad de productos, precio
    Proceso: cp x pre, eso x 16%, suma
    Salida:
        GRACIAS POR TU COMPRA
        Subtotal:   $000,000.00
             Iva:   $000,000.00
             Total: $000,000.00
*/

var price;
var quantity;
var subtotal;
var tax;
var total;
var x=0;


do {    
    price = prompt('Escribe el precio del producto');  
    if (isNaN(price)) {
        console.error('El valor', price, 'no es un precio valido');
        console.warn('Intento numero',++x,);
    }
} while (isNaN(price));

do {
    quantity = prompt('¿Cuántos productos compraste?');
    if (isNaN(quantity)) {
        console.error('El valor', quantity, 'no es una cantidad valida');
        console.warn('Intento numero',++x,);
    }
} while (isNaN(quantity));

// Convertir a numero

price = Number(price);
quantity = Number(quantity);

subtotal = price * quantity;
tax = subtotal * 0.16;
total = subtotal + tax;


console.log('GRACIAS POR TU COMPRA');
console.log('Subtotal: $', subtotal);
console.log('IVA: $', tax);
console.log('Total: $', total);

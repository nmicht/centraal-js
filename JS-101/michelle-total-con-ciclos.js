(function () {
    'use strict';

    /*
    Programa que calcula el total a pagar por un tipo de producto
    - pregunta el precio
    - pregunta la cantidad de articulos
    - calcula el subtotal
    - desglosa el iva
    - entrega en la consola el total a pagar

    Entradas: cantidad de productos, el precio
    Proceso: cp x pre, eso x 16%, suma
    Salida:
    GRACIAS POR TU COMPRA
    Subtotal: $000,000.00
    Iva: $000,000.00
    Total: $000,000.00
    */

    let price;
    let quantity;
    let subtotal;
    let tax;
    let total;
    let stupid = 0;

    do {
        price = prompt('Escribe el precio del producto');
        if (isNaN(price)) {
            stupid += 1;
            console.error('El valor ', price, ' no es un precio valido');
        }
    } while (isNaN(price));

    do {
        quantity = prompt('Cuántos productos compraste?');
        if (isNaN(quantity)) {
            stupid += 1;
            console.error('El valor ', quantity, ' no es una cantidad valida');
        }
    } while (isNaN(quantity));


    // Convertir a numeros
    price = Number(price);
    quantity = Number(quantity);

    subtotal = price * quantity;
    tax = subtotal * 0.16;
    total = subtotal + tax;

    console.warn('Tu nivel de estupidez es ', stupid);
    console.log('GRACIAS POR TU COMPRA');
    console.log('Subtotal: $', subtotal);
    console.log('IVA: $', tax);
    console.log('Total: $', total);
}());

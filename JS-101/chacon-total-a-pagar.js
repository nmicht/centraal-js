(function () {
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

    price = prompt('Type the price of the product');
    quantity = prompt('How many products did you buy?');

    // Convertir a números
    price = Number(price);
    quantity = Number(quantity);

    if (isNaN(price) || isNaN(quantity)) {
        console.error('Please enter a valid number');
    } else {
        subtotal = price * quantity;
        tax = subtotal * 0.16;
        total = subtotal + tax;
        // Salidas
        console.log('Thanks for your purchase.');
        console.log('Subtotal: $', subtotal);
        console.log('Tax: $', tax);
        console.log('Total: $', total);
    }
}());

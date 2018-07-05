(function () {
    "use strict";
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

    let price;
    let quantity;
    let subtotal;
    let tax;
    let total;

    price = prompt('Escribe el precio del producto');
    quantity = prompt('Cuántos productos compraste?');

    //Convertir  NUMEROS
    price = Number(price);
    quantity = Number(quantity);

    if (isNaN(price) || isNaN (quantity)) {
        console.error('Please enter valid number');
    }
    else {
        subtotal = price * quantity;
        tax = subtotal * .16;
        total = subtotal + tax;

        console.log('GRACIAS POR TU COMPRA');
        console.log('subtotal; $', subtotal);
        console.log('iva: $', tax);
        console.log('total: $', total);
    }
}());


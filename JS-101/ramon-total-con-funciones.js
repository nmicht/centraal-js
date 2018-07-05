"use strict";
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

let price;
let quantity;
let surcharges;

quantity = getNumber('Escriba el numero de productos');

price = getNumber('Escribe el precio del producto');


// Convertir a numero


surcharges = calcSurcharges(price, quantity);

printTicket(surcharges.subtotal, surcharges.tax, surcharges.total);


/**

* Print a ticket for a purchase including surcharges
*
* @param {number} subtotal The subtotal of the purchase
* @param {number} tax      Calculated tax for the purchase
* @param {number} total    The total amount
*
*/

function printTicket(subtotal, tax, total) {
    console.log('GRACIAS POR TU COMPRA');
    console.log('Subtotal: $', subtotal.toFixed(2));
    console.log('IVA: $', tax.toFixed(2));
    console.log('Total: $', total.toFixed(2));
}


/**

* Calc the surcharges (subtotal, tax and total) based on price and quantity.
*
* @param {number} price     The price of the product
* @param {number} quantity  The amount of products to buy
*
* @return {object}          An object with the subtotal, tax and total.
*
*/

function calcSurcharges(price, quantity) {
    price = Number(price);
    quantity = Number(quantity);

    let subtotal = price * quantity;
    let tax = subtotal * 0.16;
    let total = subtotal + tax;

    return {
        subtotal,
        tax,
        total,
    };
}


/**
*Display a message and get the input from the user. Will return the input only when it is a number.
*
* @param {string} message     The price of the product
*
* @return {number}          ....
*
*/

function getNumber(message) {
    let number;
    do {
        number = prompt(message);
        if (isNaN(number)) {
            console.error('El valor', number, 'no es una cantidad valida');
        }
    } while (isNaN(number));

    return number;
}

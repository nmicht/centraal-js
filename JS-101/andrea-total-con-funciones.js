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
let totalestupido = 0;

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

breakdown = calcbreakdown(price, quantity)
printTicket(breakdown.subtotal, breakdown.tax, breakdown.total);
price = getNumber('Escribe el precio del producto');

/************************************************************/

/**
*Print a ticket for a purchase including the surcharges.
* @param {number} subtotal    The total of the purchase
* @param {number} tax         Calculate tax for the purchase
* @param {number} total       The total amount
*/
function printTicket(subtotal, tax, total) {
    console.log('GRACIAS POR TU COMPRA');
    console.log('subtotal: $', subtotal.toFixed(2));
    console.log('iva: $', tax.toFixed(2));
    console.log('total: $', total.toFixed(2));
}
/**
*Calc the surcharges (subtotal, tax and total) based on price and quantity.
* @param {number} price         The price of the product
* @param {number} quantity      The amount of products to buy

* @return {object}              An object with the subtotal, tax and total
*/
function calcbreakdown (price, quantity) {
    let subtotal;
    let tax;
    let total;

    //Convertir  NUMEROS
    price = Number(price);
    quantity = Number(quantity);

    subtotal = price * quantity;
    tax = subtotal * .16;
    total = subtotal + tax;

    return {
        subtotal,
        tax,
        total
    };
}

/**

*/
function getNumber (message) {
    var number;
    do {
        number = prompt (message);
        if (isNaN(number)) {
            console.error(number, 'is not valid');
        }
    }while (isNaN(number));

    return {
        number,
    };
}

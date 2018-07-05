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

/**
* Displays a message, asks for a number, loops until a valid number is written
* @param  {string} message receives a number from the customer
* @return {number} number  transforms the string into a number
*/
function getNumber(message) {
    let number;
    do {
        number = prompt(message);
        if (isNaN(number)) {
            console.error(number, 'is not a valid number');
        }
    } while (isNaN(number));
    return number;
}

/**
* Prints a ticket for a purchase including the subcharges.
*
* @param  {number} subtotal The subtotal of the purchase.
* @param  {number} tax      Calculated tax for the purchase.
* @param  {number} total    Total amount to be payed.
*/
function printTicket(subtotal, tax, total) {
    console.log('Thanks for your purchase.');
    console.log('Subtotal: $', subtotal.toFixed(2));
    console.log('Tax: $', tax.toFixed(2));
    console.log('Total: $', total.toFixed(2));
}

/**
* Calc the surcharges (subtotal, tax & total) based on price and quantity.
* @param  {Number} price    The price of the product.
* @param  {Number} quantity The amount of products to buy.
*
* @return {Object}          An object with the subtotal, tax & total.
*/
function calcSurcharges(price, quantity) {
    let subtotal;
    let tax;
    let total;
    let priceNumber;
    let quantityNumber;

    priceNumber = Number(price);
    quantityNumber = Number(quantity);

    subtotal = price * quantity;
    tax = subtotal * 0.16;
    total = subtotal + tax;

    return {
        subtotal,
        tax,
        total,
    };
}

let quantity;
let price;
let surcharges;

price = getNumber('Type the price of the product');
quantity = getNumber('Type quantity of products');
surcharges = calcSurcharges(price, quantity);
printTicket(surcharges.subtotal, surcharges.tax, surcharges.total);

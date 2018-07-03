

const phonePrice = 1000;
const accesoryPrice = 500;
const tax = 0.16;
const spendingThreshold = 20000;


var bankAccount = 35000; 
var phoneQuantity;
var accesoryQuantity;
var surcharges;




function getSubtotal(phonePrice, phoneQuantity, accesoryPrice, accesoryQuantity, bankAccount, spendingThreshold){
    var numberPhone
    var numberAccesory
    var numberSubtotal

    do {
        numberPhone = phonePrice*phoneQuantity;
        if (numberPhone <= spendingThreshold ) {
            numberAccesory = accesoryPrice*accesoryQuantity;
        }
        
        numberSubtotal = numberPhone + numberAccesory

    } while (numberPhone <= bankAccount)
    return numberSubtotal 
}


//Convertir a numero


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

function calcSurcharges(quantity) {
    
    quantity = Number(quantity);        
            

    var subtotal = price * quantity;
    var tax = subtotal * 0.16;
    var total = subtotal + tax;
    
    return {
        subtotal,
        tax,
        total
    }
    }



/**

* Display a message and get the input from the user. Will return the input only when it is a number. 
*
* @param {string} message     The price of the product
*
* @return {number}          ....
*
*/






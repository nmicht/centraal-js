(function () {
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

    let price;
    let quantity;
    let surcharges;

    price = getNumber('Escribe el precio del producto');
    quantity = getNumber('¿Cuántos productos compraste?');

    surcharges = calcSurcharges(price, quantity);
    printTicket(surcharges.subtotal, surcharges.tax, surcharges.total);


    function printTicket(subtotal, tax, total) {
        console.log('GRACIAS POR SU COMPRA');
        console.log('Subtotal: $', subtotal);
        console.log('IVA: $', tax);
        console.log('Total: $', total);
    }
    function calcSurcharges(price, quantity) {
        let subtotal;
        let tax;
        let total;

        price = Number(price);
        quantity = Number(quantity);

        subtotal = price * quantity;
        tax = subtotal * 0.16;
        total = subtotal + tax;

        return {
            subtotal,
            tax,
            total
        };
    }


    function getNumber(message) {
        let number;
        do {
            number = prompt(message);
            if (isNaN(number)) {
            }
        } while (true);
    }
}());

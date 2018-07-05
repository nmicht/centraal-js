
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
let subtotal;
let tax;
let total;

price = prompt('Escribe el precio del producto');
quantity = prompt('¿Cuántos productos compraste?');

// Convertir a numero

price = Number(price);
quantity = Number(quantity);

if (isNaN(price) || isNaN(quantity)) {
    console.error('Datos no validos');
} else {
    subtotal = price * quantity;
    tax = subtotal * 0.16;
    total = subtotal + tax;

    console.log('GRACIAS POR TU COMPRA');
    console.log('Subtotal: $', subtotal);
    console.log('IVA: $', tax);
    console.log('Total: $', total);
}

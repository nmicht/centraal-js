


do{
  price = prompt('Escribe el precio de tu producto');
  if (isNaN(price)){
    veces++;
    console.error('El valor', price, 'no es valido');
  }
} while (isNaN(price));

do{
  quantity = prompt('Cuantos productos compraste?');
} while (isNaN(quantity));

surcharges = calcSurcharges(price, quantity);
printTicket(surcharges.subtotal, surcharges.tax, surcharges.total);

/*console.warn('Tu nivel de estupidez es', veces);



console.warn('Tu nivel de estupidez es' , stupid);*/
printTicket(subtotal, tax, total);

function printTicket(subtotal, tax, total){
console.log('Gracias por tu compra');
console.log('El subtotal es: $', subtotal);
console.log('IVA: $', tax);
console.log('Total: $', total);
}
function calcSurcharges(price, quantity){

  var price;
  var quantity;
  var total;

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

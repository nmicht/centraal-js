

const TAX_RATE = 0.16
const PHONE_PRICE = 99.99;
const ACCESORY_PRICE= 9.99
const SPENDING = 200

var bankBalance= 350;
var subtotal;
var iva;
var total;

do {
  subtotal = PHONE_PRICE + ACCESORY_PRICE;
  iva = subtotal * TAX_RATE;
  total = subtotal + iva;

  if (total <= SPENDING){
    if (total <= bankBalance){
      bankBalance = bankBalance - total;
    }
  }
} while (bankBalance > 0);

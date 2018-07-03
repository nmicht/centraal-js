function bankAccountAsk(message) {
    var money;
    do {
        money = prompt(message);
        if (isNaN(money)) {
            console.error(money, 'That is not a valid amount');
        }
    } while (isNaN(money));
    return money;
}

function buyPhone(phoneTotal, bankAccount) {
    var phonesBought = 0;
    do {
        phonesBought += 1;
    } while (Bank >= phoneTotal);
    console.log(phonesBought);
}

function phonePrice() {
    var phone = 200;
    var tax = 0.16;
    var accessory = 30;
    var phoneTotal;

    phoneTotal = ((phone + accessory) * (1 + tax));

    return totalPhonePrice;
}

function printTicket() {
    console.log('Thanks for your purchase');
    console.log();
}
var bankAccount;
var totalPhonePrice = phonePrice();

bankAccount = bankAccountAsk('How much money have you got?');

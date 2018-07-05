(function () {
    'use strict';
    function bankAccountAsk(message) {
        let money;
        do {
            money = prompt(message);
            if (isNaN(money)) {
                console.error(money, 'That is not a valid amount');
            }
        } while (isNaN(money));
        return money;
    }

    function buyPhone(phoneTotal, bankAccount) {
        let phonesBought = 0;
        do {
            phonesBought += 1;
        } while (Bank >= phoneTotal);
        console.log(phonesBought);
    }

    function phonePrice() {
        let phone = 200;
        let tax = 0.16;
        let accessory = 30;
        let phoneTotal;

        phoneTotal = ((phone + accessory) * (1 + tax));

        return totalPhonePrice;
    }

    function printTicket() {
        console.log('Thanks for your purchase');
        console.log();
    }
    let bankAccount;
    let totalPhonePrice = phonePrice();

    bankAccount = bankAccountAsk('How much money have you got?');
}());

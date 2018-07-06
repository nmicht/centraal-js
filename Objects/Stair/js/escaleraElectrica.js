'use strict';

const stair = {
    name: 'Stair of the future',
    numberStairs: '35',
    sayHi: function sayHi(name = '') {
        return `Greetings ${name} I'm the ${this.name}`;
    },
    getUp: function getUp(name = '') {
        return `let´s go to the top ${name}`;
    },
    goDown: function goDown() {
        return `let´s go to the bottom ${name}`;
    },
    stop: function stop() {
        return `let´s take a break ${name}`;
    },
    powerDown: function powerDown() {
        return 'You tried to stop the future, you can´t stop the future';
    },
    bye: function bye(friendo) {
        console.log('bye ', friendo);
    }
};

let btnHi = document.getElementById('buttonHi')
btnHi.onclick = function () {
    const msg = stair.sayHi();
    addMessage(msg)
}

let btnUp = document.getElementById('buttonUp')
btnUp.onclick = function () {
    const msg = stair.getUp();
    addMessage(msg)
}

let btnDown = document.getElementById('buttonDown')
btnDown.onclick = function () {
    const msg = stair.goDown();
    addMessage(msg)
}

let btnStop = document.getElementById('buttonStop')
btnStop.onclick = function () {
    const msg = stair.stop();
    addMessage(msg)
}

let btnPowerDown = document.getElementById('buttonPowerDown')
btnPowerDown.onclick = function () {
    const msg = stair.powerDown();
    addMessage(msg)
}

function addMessage(msg) {
    const box = document.getElementById('messages');
    const oldBox = box.textContent;
    box.textContent = `${oldBox}\n${msg}`;
}

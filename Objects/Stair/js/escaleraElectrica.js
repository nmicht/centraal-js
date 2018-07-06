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
    },
};

const btnHi = document.getElementById('buttonHi');
btnHi.onclick = function () {
    addMessage(stair.sayHi());
};

const btnUp = document.getElementById('buttonUp');
btnUp.onclick = function () {
    addMessage(stair.getUp());
};

const btnDown = document.getElementById('buttonDown');
btnDown.onclick = function () {
    addMessage(stair.goDown());
};

const btnStop = document.getElementById('buttonPowerDown');
btnStop.onclick = function () {
    addMessage(stair.stop());
};

const btnPowerDown = document.getElementById('buttonShutDown');
btnPowerDown.onclick = function () {
    addMessage(stair.powerDown());
};

function addMessage(msg) {
    const box = document.getElementById('messages');
    const oldBox = box.textContent;
    box.textContent = `${oldBox}\n${msg}`;
}

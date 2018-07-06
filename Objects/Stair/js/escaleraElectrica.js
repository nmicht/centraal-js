'use strict';

let stair = {
    name: 'Stair of the future',
    numberStairs: '35',
    sayHi: function sayHi(name = '') {
        return `Greetings ${name} I'm the ${this.name}`;
    },
    getUp: function getUp(name = '') {
        return `Lets go to the top ${name}`;
    },
    goDown: function goDown() {
        return `Lets go to the bottom ${name}`;
    },
    stop: function stop() {
        return `Lets take a break ${name}`;
    },
    powerDown: function powerDown() {
        return 'You can´t stop the tried to stop the future';
    },
    bye: function bye(friendo) {
        console.log('bye ', friendo);
    }
};

function hiClicked() {
    let msg = stair.sayHi();
    let box = document.getElementById('messages');
    let oldBox = box.textContent;
    box.textContent = `${oldBox} \n ${msg}`;
}

function goUpClicked() {
    let msg = stair.getUp();
    let box = document.getElementById('messages');
    let oldBox = box.textContent;
    box.textContent = `${oldBox} \n ${msg}`;
}

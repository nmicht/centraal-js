'use strict';

const Stair = function (name, steps) {
    this.name = name;
    this.steps = steps;
};

Stair.prototype.sayHi = function (name = '') {
    return `Greetings ${name} I'm the ${this.name}`;
};
Stair.prototype.getUp = function getUp(name = '') {
    return `let´s go to the top ${name}`;
};
Stair.prototype.goDown = function goDown(name = '') {
    return `let´s go to the bottom ${name}`;
};
Stair.prototype.stop = function stop(name = '') {
    return `let´s take a break ${name}`;
};
Stair.prototype.powerDown = function () {
    return 'You tried to stop the future, you can´t stop the future';
};

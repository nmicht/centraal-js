const ball = function (name, color = 'red') {
    this.name = name;
    this.color = color;
};

ball.prototype.sayHi = function (name = '') {
    return `Hi, I'm ${this.name}, nice to meet you`;
};
ball.prototype.bounceBack = function (color = '') {
    return `${this.color} ball goes up`;
};
ball.prototype.roll = function () {
    return 'Ball rolls in the ground';
};
ball.prototype.float = function () {
    return 'Ball stays up in the water';
};

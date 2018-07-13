const Robot = function (name, color = 'black') {
    this.name = name;
    this.color = color;
};

Robot.prototype.sayHi = function (name = '') {
    return `Hi I'm ${this.name}. Go fuck yourself ${name}`;
};
Robot.prototype.drink = function () {
    return 'I\'m drinking, ahhh';
};
Robot.prototype.smoke = function () {
    return 'smoooooooooking';
};
Robot.prototype.lang = 'en';

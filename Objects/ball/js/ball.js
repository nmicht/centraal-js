const ball = {
    color: 'Red',
    name: 'Juan',
    sayHi: function sayHi(name = '') {
        return `Hi, I'm ${this.color}, nice to meet you ${name}`;
    },
    bounceBack: function bounceBack(color = '') {
        return `Ball ${this.color} goes up ${color}`;
    },
    roll: function roll() {
        return 'Ball rolls in the ground';
    },
    float: function float() {
        return 'Balls stays up in the water';
    },
};

let stair = {
    name: 'Stair of the future',
    numberStairs: '35',
    sayHi: function sayHi(name = '') {
        return `Greetings ${name} I'm the ${this.name}`;
    },
    getUp: function getUp(name = '') {
        return `Go up ${name}`;
    },
    goDown: function goDown() {
        return 'Go down';
    },
    stop: function stop() {
        return 'Stop in case of emergency';
    },
    powerDown: function powerDown() {
        return 'Turn off';
    },
};

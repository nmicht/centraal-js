let airCon = {
    name: 'Robotina',
    sayHi: function sayHi(name = '') {
        return `Hi I'm ${this.name} You are nice ${name}`;
    },
    getCold: function getCold() {
        return 'freezing';
    },
    getHot: function getHot() {
        return 'hotting';
    },
};

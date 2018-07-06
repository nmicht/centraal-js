const robot = {
    name: 'Bender',

    sayHi: function (name = '') {
        return `Hi I'm ${this.name}. Go fuck yourself ${name}`;
    },

    drink: function () {
        return 'I\'m drinking, ahhh';
    },

    smoke: function () {
        return 'smoooooooooking';
    },
};

function clickHi() {
    const msg = robot.sayHi();
    addMessage(msg);
}

function clickSmoke() {
    const msg = robot.smoke();
    addMessage(msg);
}

function addMessage(msg) {
    const textarea = document.getElementById('messages');
    const oldMsgs = textarea.textContent;
    textarea.textContent = `${oldMsgs}\n${msg}`;
}

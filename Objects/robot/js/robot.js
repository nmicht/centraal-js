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

function addMessage(msg) {
    const textarea = document.getElementById('messages');
    const oldMsgs = textarea.textContent;
    textarea.textContent = `${oldMsgs}\n${msg}`;
}

const btnHi = document.getElementById('hi');
btnHi.onclick = function () {
    addMessage(robot.sayHi());
};

const btnSmoke = document.getElementById('smoke');
btnSmoke.onclick = function () {
    addMessage(robot.smoke());
};

const ball = {
    color: 'Red',
    name: 'Juan',
    sayHi: function sayHi(name = '') {
        return `Hi, I'm ${this.color}, nice to meet you ${name}`;
    },
    bounceBack: function bounceBack(color = '') {
        return `${this.color} ball goes up ${color}`;
    },
    roll: function roll() {
        return 'Ball rolls in the ground';
    },
    float: function float() {
        return 'Ball stays up in the water';
    },
};

function hiClicked() {
    let msg = ball.sayHi();

    let textarea = document.getElementById('messages');

    let oldMsgs = textarea.textContent;

    textarea.textContent = `${oldMsgs}\n${msg}`;
}

function bounceBack() {
    let msg = ball.bounceBack();

    let textarea = document.getElementById('messages');

    let oldMsgs = textarea.textContent;

    textarea.textContent = `${oldMsgs}\n${msg}`;
}

function roll() {
    let msg = ball.roll();

    let textarea = document.getElementById('messages');

    let oldMsgs = textarea.textContent;

    textarea.textContent = `${oldMsgs}\n${msg}`;
}


function float() {
    let msg = ball.float();

    let textarea = document.getElementById('messages');

    let oldMsgs = textarea.textContent;

    textarea.textContent = `${oldMsgs}\n${msg}`;
}

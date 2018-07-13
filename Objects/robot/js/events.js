// Create bender instance
const bender = new Robot('Bender', 'silver');

function addMessage(msg) {
    const textarea = document.getElementById('messages');
    const oldMsgs = textarea.textContent;
    textarea.textContent = `${oldMsgs}\n${msg}`;
}

const btnHi = document.getElementById('hi');
btnHi.onclick = function () {
    addMessage(bender.sayHi());
};

const btnSmoke = document.getElementById('smoke');
btnSmoke.onclick = function () {
    addMessage(bender.smoke());
};

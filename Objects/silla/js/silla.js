let silla = {
    name: 'ergo',

    sayHi: function sayHi(name = '') {
        return `Hi I am ${this.name}, please put your bootilicious on me ${name}`;
    },
    massage: function massage(name = '') {
        return `${this.name} will shaaaake your ass ${name}, until you feel OK`;
    },
};
const btnHi = document.getElementById('hiButton');
btnHi.onclick = function () {
    addMessage(silla.sayHi());
};
const btnMsg = document.getElementById('massageButton');
btnMsg.onclick = function () {
    addMessage(silla.massage());
};
function addMessage(msg) {
    const textarea = document.getElementById('messages');
    const oldMsg = textarea.textContent;
    textarea.textContent = `${oldMsg}\n${msg}`;
}

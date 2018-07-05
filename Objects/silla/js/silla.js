let silla = {
    name: 'ergo',

    sayHi: function sayHi(name = '') {
        return `Hi I am ${this.name}, please put your bootilicious on me ${name}`;
    },
    massage: function massage(name = '') {
        return `${this.name} will shake your ass ${name}, until you feel OK`;
    },
};

function hiClicked() {
    let msg = silla.sayHi();
    let textArea = document.getElementById('messages');
    let oldMsg = textArea.textContent;
    textArea.textContent = oldMsg + ' ' + msg;
    console.log(msg);
};
function massage() {
    let msg = silla.massage();
    let textArea = document.getElementById('messages');
    let oldMsg = textArea.textContent;
    textArea.textContent = oldMsg + ' ' + msg;
    console.log(msg);
}

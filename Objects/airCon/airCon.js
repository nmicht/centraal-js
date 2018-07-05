let airCon = {
    name: 'Robotina',
    sayHi: function sayHi(name = '') {
        return `Hi I'm ${this.name} You are nice ${name}`;
    },
    getCold: function getCold() {
        return 'freezing, I\'m freezing \nbrrrrrrrrrrrrr\n ';
    },
    getHot: function getHot() {
        return 'it\'s getting hot in herrre';
    },
};

function HiClicked() {
    let msg = airCon.sayHi();
    let textarea = document.getElementById('messages');
    let oldMsgs = textarea.textContent;
    textarea.textContent = oldMsgs + '' + msg;
}
function FreezeClicked() {
    let msg = airCon.getCold();
    let textarea = document.getElementById('messages');
    let oldMsgs = textarea.textContent;
    textarea.textContent = oldMsgs + '' + msg;
}
function HotClicked() {
    let msg = airCon.getHot();
    let textarea = document.getElementById('messages');
    let oldMsgs = textarea.textContent;
    textarea.textContent = `${oldMsgs}\n${msg}`;
}

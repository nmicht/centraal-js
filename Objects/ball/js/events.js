const voit = new ball('white', 'voit');


function hiClicked() {
    let msg = voit.sayHi();

    let textarea = document.getElementById('messages');

    let oldMsgs = textarea.textContent;

    textarea.textContent = `${oldMsgs}\n${msg}`;
}

function bounceBack() {
    let msg = voit.bounceBack();

    let textarea = document.getElementById('messages');

    let oldMsgs = textarea.textContent;

    textarea.textContent = `${oldMsgs}\n${msg}`;
}

function roll() {
    let msg = voit.roll();

    let textarea = document.getElementById('messages');

    let oldMsgs = textarea.textContent;

    textarea.textContent = `${oldMsgs}\n${msg}`;
}


function float() {
    let msg = voit.float();

    let textarea = document.getElementById('messages');

    let oldMsgs = textarea.textContent;

    textarea.textContent = `${oldMsgs}\n${msg}`;
}

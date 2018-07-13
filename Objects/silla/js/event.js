//Create silla instance

const chair = new Silla('Silla', 'brown');

function hiClicked() {
    let msg = chair.sayHi();
    let textArea = document.getElementById('messages');
    let oldMsg = textArea.textContent;
    textArea.textContent = oldMsg + ' ' + msg;
    console.log(msg);
}
function massage() {
    let msg = chair.massage();
    let textArea = document.getElementById('messages');
    let oldMsg = textArea.textContent;
    textArea.textContent = oldMsg + ' ' + msg;
    console.log(msg);
}

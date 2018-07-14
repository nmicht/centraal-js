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

// Select the Robot
const options = document.getElementsByTagName('img');
for (img of options) {
    img.onclick = function (e) {
        e = e || window.event;
        let img = e.target || e.srcElement;
        img.classList.toggle('remark');
        let imgs = img.parentNode.childNodes;
        imgs.forEach(function(node){
            if(node != img && node.nodeType == 1) {
                node.classList.remove('remark');
            }
        });
    };
}

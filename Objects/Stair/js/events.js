
const StairOfTheFurture = new Stair ('Stair of the Furture', '420');

function addMessage(msg) {
    const box = document.getElementById('messages');
    const oldBox = box.textContent;
    box.textContent = `${oldBox}\n${msg}`;
}

const btnHi = document.getElementById('buttonHi');
btnHi.onclick = function () {
    addMessage(StairOfTheFurture.sayHi());
};

const btnUp = document.getElementById('buttonUp');
btnUp.onclick = function () {
    addMessage(StairOfTheFurture.getUp());
};

const btnDown = document.getElementById('buttonDown');
btnDown.onclick = function () {
    addMessage(StairOfTheFurture.goDown());
};

const btnStop = document.getElementById('buttonPowerDown');
btnStop.onclick = function () {
    addMessage(StairOfTheFurture.stop());
};

const btnPowerDown = document.getElementById('buttonShutDown');
btnPowerDown.onclick = function () {
    addMessage(StairOfTheFurture.powerDown());
};

const options = document.getElementsByTagName('img');
for (img of options) {
    img.onclick = function (e) {
        e = e || window.event;
        let img = e.target || e.srcElement;
        img.classList.toggle('selected');
        let imgs = img.parentNode.childNodes;
        imgs.forEach(function(node){
            if(node != img && node.nodeType == 1) {
                node.classList.remove('selected');
            }
        });
    };
}

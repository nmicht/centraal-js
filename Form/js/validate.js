let inputName = document.getElementById('name');
inputName.addEventListener('blur', function () {
    this.className = '';
    if (this.value == false) {
        let spanTag = document.createElement('span');
        let content = document.createTextNode('Type a name');
        spanTag.appendChild(content);
        spanTag.className = 'textError';
        this.parentNode.appendChild(spanTag);
        this.className = 'error';
    }
});
inputName.addEventListener('focus', function () {
    this.className = 'focus';
});

const something = document.getElementById('something');
something.addEventListener('blur', function () {
    this.className = '';
    if (this.value == 0) {
        this.className = 'error';
    }
});
something.addEventListener('focus', function () {
    this.className = 'focus';
});
let spanTag = document.createElement('span');
let content = document.createTextNode('Te equivocas')
spanTag.appendChild(content);
"Te equivocas"
spanTag
    <span>Te equivocas</span>
document.body.appendChild(spanTag)
    <span>Te equivocas</span>
ageInput

const ageInput = document.getElementById('age');
ageInput.addEventListener('blur', function () {
    this.className = '';
    if (this.value < 18) {
        this.className = 'error';
    }
});
ageInput.addEventListener('focus', function () {
    this.className = 'focus';
});

const submit = document.getElementById('submit');
submit.addEventListener('click', function () {
    let timeM = document.getElementById('time-m');
    let timeT = document.getElementById('time-t');
    let timeN = document.getElementById('time-n');
    if(!timeM.checked && !timeT.checked && !timeN.checked) {
        console.log('debe seleccionar algo');
    }
});

const textarea = document.getElementById('comments');
textarea.addEventListener('blur', function () {
    if (textarea.value == false) {
        this.className = 'error';
    }
})

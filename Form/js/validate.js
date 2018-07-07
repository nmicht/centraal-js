let inputName = document.getElementById('name');
inputName.addEventListener('blur', function () {
    this.className = '';
    if (this.value == false) {
        this.className = 'error';
    }
});
inputName.addEventListener('focus', function () {
    this.className = 'focus';
});

const something = document.getElementById('something');
something.addEventListener('blur', function () {
    if (this.value == 0) {
        this.className = 'error';
    }
});

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

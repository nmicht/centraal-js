const inputCosa = document.getElementById('cosa');
inputCosa.addEventListener('focus', function () {
    this.className = 'focus';
});

let inputName = document.getElementById('name');
inputName.addEventListener('blur', function () {
    if (inputName.value == false) {
        this.className = 'error';
    }
});

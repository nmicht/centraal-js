const inputCosa = document.getElementById('cosa');
inputCosa.addEventListener('focus', function () {
    this.className = 'focus';
});
const select = document.getElementById('select');
select.addEventListener('blur', function () {
    if (this.value === 0) {
        console.error('lo dejaste en blanco puto');
        this.className = 'error';
    }
});

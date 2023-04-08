const tipeSelect = document.querySelector('#tipe');
const tipeLainnyaInput = document.querySelector('#tipe-lainnya');
const tipeLainnyaBtn = document.querySelector('#tipe-lainnya-btn');

tipeSelect.addEventListener('change', function () {
    if (this.value === 'lainnya') {
        tipeSelect.style.display = 'none';
        tipeLainnyaInput.style.display = 'block';
        tipeLainnyaInput.value = '';
        tipeLainnyaInput.focus();
    } else {
        tipeSelect.style.display = 'block';
        tipeLainnyaInput.style.display = 'none';
    }
});

tipeLainnyaBtn.addEventListener('click', function () {
    tipeSelect.style.display = 'none';
    tipeLainnyaInput.style.display = 'block';
    tipeLainnyaInput.value = '';
    tipeLainnyaInput.focus();
    tipeSelect.selectedIndex = tipeSelect.length - 1;
});
tipeLainnyaInput.addEventListener('blur', function () {
    if (this.value.trim() === '') {
        tipeSelect.style.display = 'block';
        tipeLainnyaInput.style.display = 'none';
        tipeSelect.selectedIndex = 0;
    }
});
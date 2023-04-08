// ambil elemen tombol Income dan Expense
const btnIncome = document.querySelector('.container-box .col-6:first-child');
const btnExpense = document.querySelector('.container-box .col-6:last-child');

// ambil elemen form-input dan histori
const formInput = document.querySelector('.form-input');
const histori = document.querySelector('.histori');

// saat tombol Income diklik
btnIncome.addEventListener('click', function () {
    // tambahkan kelas active pada tombol Income dan hapus dari tombol Expense
    btnIncome.classList.add('box-inside');
    btnExpense.classList.remove('bg-danger');

    // tambahkan kelas d-none pada elemen histori dan hapus dari elemen form-input
    histori.classList.add('d-none');
    formInput.classList.remove('d-none');

    // ubah background pada elemen box-inside
    // document.querySelector('.box-inside').style.backgroundColor = '';
});

// saat tombol Expense diklik
btnExpense.addEventListener('click', function () {
    // tambahkan kelas active pada tombol Expense dan hapus dari tombol Income
    btnExpense.classList.add('bg-danger');
    btnIncome.classList.remove('box-inside');

    // tambahkan kelas d-none pada elemen form-input dan hapus dari elemen histori
    formInput.classList.add('d-none');
    histori.classList.remove('d-none');

    // ubah background pada elemen box-inside
    // document.querySelector('.box-inside').style.color = 'black';
});
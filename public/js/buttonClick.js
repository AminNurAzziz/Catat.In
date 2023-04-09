// ambil elemen tombol Income dan Expense
const btnIncome = document.querySelector('.container-box .col-6:first-child');
const btnExpense = document.querySelector('.container-box .col-6:last-child');
const btnDompet = document.querySelector('.icon-edit-dompet');
const btnPengeluaran = document.querySelector('.icon-edit-pengeluaran');
// Mengambil elemen tombol hapus dan semua checkbox yang ada
const iconHapus = document.querySelector(".iconhapus");
const btnCencel = document.querySelector(".cencel");
const btnHapus = document.querySelector(".hapus");
const checkboxess = document.querySelectorAll("input[type=checkbox]");
const selectAllBtn = document.querySelector('.select-all');

if (selectAllBtn) {
    selectAllBtn.addEventListener('click', () => {
        const checkboxes = document.querySelectorAll('.form-check-input');
        checkboxes.forEach((checkbox) => {
            checkbox.checked = true;
        });
    });
}

if (iconHapus) {
    // Menambahkan event listener untuk tombol hapus
    iconHapus.addEventListener("click", function () {
        // Menampilkan semua checkbox
        checkboxess.forEach(function (checkbox) {
            checkbox.parentNode.classList.remove("d-none");
        });
        btnCencel.classList.remove("d-none");
        btnHapus.classList.remove('d-none');
        selectAllBtn.classList.remove('d-none');
        iconHapus.classList.add('d-none');
    });
}


if (btnCencel) {
    // Menambahkan event listener untuk tombol hapus
    btnCencel.addEventListener("click", function () {
        // Menampilkan semua checkbox
        checkboxess.forEach(function (checkbox) {
            checkbox.parentNode.classList.add("d-none");
        });
        btnCencel.classList.add("d-none");
        btnHapus.classList.add('d-none');
        selectAllBtn.classList.add('d-none');
        iconHapus.classList.remove('d-none');
    });
}


// ambil elemen form-input dan histori
const formInput = document.querySelector('.form-input');
const histori = document.querySelector('.histori');
const editDompet = document.querySelector('.edit-dompet');
const editExpense = document.querySelector('.edit-expense');


// saat tombol Income diklik
btnIncome.addEventListener('click', function () {
    // tambahkan kelas active pada tombol Income dan hapus dari tombol Expense
    btnIncome.classList.add('box-inside');
    btnExpense.classList.remove('bg-danger');
    btnDompet.classList.remove('box-inside');
    btnPengeluaran.classList.remove('bg-danger');

    // tambahkan kelas d-none pada elemen histori dan hapus dari elemen form-input
    histori.classList.add('d-none');
    editDompet.classList.add('d-none');
    editExpense.classList.add('d-none');
    formInput.classList.remove('d-none');

    // ubah background pada elemen box-inside
    // document.querySelector('.box-inside').style.backgroundColor = '';
});

// saat tombol Expense diklik
btnExpense.addEventListener('click', function () {
    // tambahkan kelas active pada tombol Expense dan hapus dari tombol Income
    btnExpense.classList.add('bg-danger');
    btnIncome.classList.remove('box-inside');
    btnDompet.classList.remove('box-inside');
    btnPengeluaran.classList.remove('bg-danger');

    // tambahkan kelas d-none pada elemen form-input dan hapus dari elemen histori
    formInput.classList.add('d-none');
    editDompet.classList.add('d-none');
    editExpense.classList.add('d-none');
    histori.classList.remove('d-none');

    // ubah background pada elemen box-inside
    // document.querySelector('.box-inside').style.color = 'black';
});

btnDompet.addEventListener('click', function () {
    // tambahkan kelas active pada tombol Expense dan hapus dari tombol Income
    btnDompet.classList.add('box-inside');
    btnPengeluaran.classList.remove('bg-danger');

    // tambahkan kelas d-none pada elemen form-input dan hapus dari elemen histori
    formInput.classList.add('d-none');
    histori.classList.add('d-none');
    editExpense.classList.add('d-none');
    editDompet.classList.remove('d-none');

    // ubah background pada elemen box-inside
    // document.querySelector('.box-inside').style.color = 'black';
});

btnPengeluaran.addEventListener('click', function () {
    // tambahkan kelas active pada tombol Expense dan hapus dari tombol Income
    btnPengeluaran.classList.add('bg-danger');
    btnDompet.classList.remove('box-inside');

    // tambahkan kelas d-none pada elemen form-input dan hapus dari elemen histori
    formInput.classList.add('d-none');
    histori.classList.add('d-none');
    editDompet.classList.add('d-none');
    editExpense.classList.remove('d-none');

    // ubah background pada elemen box-inside
    // document.querySelector('.box-inside').style.color = 'black';
});
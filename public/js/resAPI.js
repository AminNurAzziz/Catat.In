// Mengambil elemen tombol hapus dan semua checkbox yang ada
const btnHapuss = document.querySelector(".hapus");
const checkboxes = document.querySelectorAll("input[type=checkbox]");

// KIRIM API
// Menambahkan event listener untuk tombol hapus
if (btnHapuss) {
    btnHapuss.addEventListener("click", async function () {
        // Mencari checkbox yang dicentang
        const ids = [];
        checkboxes.forEach(function (checkbox) {
            if (checkbox.checked) {
                ids.push(checkbox.dataset.id);
                console.log(ids)
            }
        });

        if (ids.length === 0) {
            alert('Harap centang transaksi yang ingin dihapus.');
            return;
        }

        try {
            const response = await fetch('/expenses/delete', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ids })
            });

            if (!response.ok) {
                throw new Error('Terjadi kesalahan saat menghapus transaksi.');
            }

            // Refresh halaman setelah transaksi berhasil dihapus
            window.location.reload();
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    })
};
const title = document.querySelector('h1');

let nama = localStorage.getItem('nama');

if (!nama) {
    nama = prompt('Sebutkan nama anda:');
    localStorage.setItem('nama', nama);
}

title.innerHTML = `Selamat datang ${nama} nihh!`;
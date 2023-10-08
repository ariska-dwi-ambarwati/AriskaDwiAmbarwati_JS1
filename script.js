//--TUGAS JAVASCRIPT--//

//deklarasi variabel
let nama = "Ariska Dwi Ambarwati";
let umur = 20;
let jk = "Perempuan";


//contoh penggunaan if-else dan nested if
if (umur >= 18) {
    if (jk === "Perempuan") {
        console.log(`${nama} adalah seorang gadis remaja`);
    } else {
        console.log(`${nama} adalah seorang pria remaja`);
    }
} else {
    console.log(`${nama} adalah seorang anak dibawah umur`);
}


//contoh penggunaan switch-case
let pekerjaan = "Mahasiswa"
switch (pekerjaan) {
    case "Mahasiswa":
        console.log(`${nama} sedang belajar di Universitas Maritim Raja Ali Haji`);
        break;
    case "Pegawai":
        console.log(`${nama} sedang bekerja di sebuah perusahaan IT`);
        break;
    default:
        console.log(`${nama} saat ini tidak bekerja`);
}

//contoh penggunaan for statement
console.log("Mencetak angka menggunakan for statement");
for (let a=5; a <=8; a++){
    console.log(a);
}


//contoh penggunaan while
console.log("Mencetak angka menggunakan while");
let angka = 10;
while (angka <= 15) {
    console.log(angka);
    angka++;
}


//contoh penggunaan do-while
console.log("Mencetak angka menggunakan do-while");
let number = 40;
do {
    console.log(number);
    number++;
} while (number <= 46);


//contoh penggunaan pemanggilan fungsi
function sapaan(nama) {
    console.log(`Annyeong, ${nama}! Selamat Datang`);
}

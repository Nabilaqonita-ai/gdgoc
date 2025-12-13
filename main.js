const input = require('prompt-sync')({ sigint: true })

const nama = input("Masukkan nama: ")
const umur = Number(input("Masukkan umur: "))

if (umur < 21) {
    const kurang = 21 - umur
    console.log(`Maaf ${nama}, umur kamu kurang ${kurang} tahun lagi`)
} else {
    const uang = Number(input("Masukkan jumlah uang: "))

    if (uang < 500000) {
        console.log(`Maaf ${nama}, uang kamu cuma ${uang / 1000} ribu, datang lagi lain kali`)
    } else {
        console.log(`Selamat datang ${nama}`)
    }
}
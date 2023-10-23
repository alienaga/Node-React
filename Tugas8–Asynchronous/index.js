// di index.js

console.log("Soal No. 1 (Callback Baca Buku)")
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Tulis code untuk memanggil function readBooks di sini
books.forEach(element => readBooks(10000, element, (callbackFn) => {
  console.log(callbackFn)
}))
// cara deklarasi array
let arr = [];
let arr1 = new Array();
console.log (arr);
console.log (arr1);

// cara 2 deklarasi array
let array1 = [1,2,3,4,5];
console.log (array1[2]); // menampilkan index pada array
let array2 = new Array ("A","B","C","D");
array2[3] = "L"; // replace data array pada index tertentu
console.log (array1);
console.log (array2);

// built in
// join
let array3 = new Array ("A", "B", "C", "D", "E");
console.log (array3.join()); // join gunanya untuk menggabungkan array dan berubah menjadi string dengan tambahan koma
console.log (array3.join("")); // parameter ("") digunakan untuk menghilangkan koma(,)

// pop
// gunanya untuk menghapus index akhir pada array
let array4 = ["A", "B", "C", "D"];
console.log (array4.pop()); // menampilkan array yang dikeluarkan
console.log (array4); // menampilkan array setelah ada data yang dikeluarkan

// push
// Berguna untuk memasukkan karakter/number ke index akhir pada array
// bisa juga digunakan untuk menghilangkan beberapa isi pada array
let array5 = ["A", "B", "C", "D"];
console.log (array5.push("F"));
let tampung = [];
tampung.push(array5[2]);
console.log (array5);
array5.push("G"); 
console.log (array5);

//shift
// untuk mengambil index paling depan
let arr10 = ["A","B","C"];
arr10.shift();
console.log (arr10);

//unshift
// untuk menambah index ke paling awal
arr10.unshift("Z");
console.log(arr10);

// slice
let arr3 = [1,2,3,4,5];
console.log(arr3.slice(1,4));

// sort
// untuk mengurut
let array6 = [2,5,1,3,4];
console.log (array6.sort((a,b) => a - b)); // ascending
console.log (array6.sort((a,b) => b - a)); // descending

// splice
const fruit = ["Pisang", "Mangga", "Anggur", "Salak"];
fruit.splice (0, 2, "Orange", "Apple");
console.log (fruit);
/* parameter (0) artinya menghilangkan isi mulai pada index 0 sampai index 2
dan menambahkan "Orange dan Apple" menggantikan index yang dihilangkan
*/ 

// foreach
// gunanya untuk menampilkan isi array
let array7 = [1, 2, 3, 4, 5];
let b = array7.forEach((item, index) => {
    console.log (item);
});
console.log (b); // ini hasilnya undefined karena foreach tidak bisa untuk memanipulasi isi data

// map 
// gunanya untuk memanipulasi isi data array
let arr11 = [1, 2, 3, 4, 5];
let a = arr11.map((item, index) => {
    return item * 2;
});

console.log (a);

// for of
// menampilkan array menjadi string 
let fruit1 = ["apple", "Manggo", "anggur"];
for (let fruit of fruit1){
    console.log(fruit);
}
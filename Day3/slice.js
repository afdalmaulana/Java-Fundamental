// 5
//Write a code to remove the first occurrence of a given “search string” from a string
// Example : string = “Hello world”, search string = “ell” → “Ho world
let kataa = "Hello World";
let search = kataa.slice(1, 4);
/*
    search menampung huruf dari "Hello World yang dipotong menggunakan syntax slice"
    slice (1, 4) maksudnya slice "1" memotong dari index(1->e) dan "4" adalah batas potongan
*/
console.log (search);
console.log (kataa.replace(search,""));
// console.log (kataa.replace(search,"")) adalah mengganti isi variable search dengan ""(String kosong) yang awalnya isinya "ell"

// 6
// Write a code to capitalize the first letter of each word in a string
// Example : “hello world” → “Hello World” 
let str = "hello worLD";
let splitStr = str.toLowerCase().split(" ");
console.log (splitStr);
for (let c = 0; c < splitStr.length; c++){
    console.log (splitStr[c]);
    splitStr[c] = splitStr[c].charAt(0).toUpperCase() + splitStr[c].substring(1);
/*
charAt berfungsi untuk memilih huruf tertentu dalam suatu kata, jadi
charAt(0) => menunjuk ke huruf "h" pada "hello" dan "w" pada "world"
toUpperCase adalah untuk membuat huruf menjadi kapital dan
dijumlahkan dengan 
*/
    console.log(splitStr[c]);
}
console.log (splitStr.join(" "));



//5
let kalimat2 = "Hello World"
let besar1 = kalimat2.slice(0,1); //menampilkan huruf H
let besar2 = kalimat2.slice(4); // menampilkan dari "o" karena huruf sebelum "o" di hilangkan dengan syntax slice
console.log (besar1+besar2);





//6
// let word = "hello world";
// let arr = word.toLowerCase().split(" ");
// console.log (arr);
// for (let x = 0; x < arr.length; x++){
//     arr[x] = arr[x].charAt(0).toUpperCase() + arr[x].slice(1);
// }
// let arr2 = arr.join(" ");
// console.log (arr2);

// let nama = "Purwadhika Jogja";
// let potong = nama.split(" ");
// console.log (potong);
// for (let z = 0; z < potong.length; z++){
//     potong[z] = potong[z].charAt(0).toLowerCase() + potong[z].slice(1);
// }

// let gabung = potong.join(" ");
// console.log (gabung);
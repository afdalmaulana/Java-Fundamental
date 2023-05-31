// if statement 
// if digunakan untuk satu kondisi
let umur = 24;
if (umur >= 20){
    console.log("Selamat umur anda lebih dari 20 dan bisa mendapatkan SIM");
}
else{
    console.log("Selamat umur anda kurang dari 20 dan belum bisa mendapatkan SIM");
}

// if - else if
// if - else if digunakan apabila terdapat dua kondisi

// chaining condition => if - else if - else
let nilai = "C";
if (nilai === "A"){
    console.log ("Excellent Result");
}else if (nilai === "B"){
    console.log ("Great Result");
}else if (nilai === "C"){
    console.log ("Good Result");
}else {
    console.log ("Invalid");
}

let score = 80;
if (score >= 80) {
    console.log("Obesitas");
} else if (score >= 60) {
    console.log("Berat badan anda cukup")
}else if(score >= 50){
    console.log ("Berat badan anda kurang")
}else{
    console.log ("Invalid");
}

//logical operator
// &&
let x = 6
let y = 3;
if (x < 10 && y > 1){
    console.log ("Nilai Benar");
}else {
    console.log ("Nilai Salah");
}

// ||
if (x < 20 || y > 5){
    console.log (true);
}else {
    console.log (false);
}


let text = "hello";
if (text.length === 0) {
    console.log ("Data masih kosong")
} else {
    console.log ("Data sudah di isi");
}
// text.length menghitung mulai dari 1 bukan 0
// digunakan untuk mengetahui panjang karakter 


// ternary operator
const str = "JavaScript";
if (str === "JavaScript") {
    console.log ("Its JS");
} else {
    console.log ("Its not JS");
}
// syntax dibawah merupakan ternary operator yang mempersingkat if- else
console.log (str === "JavaScript" ? "Its JS" : "Its not JS");
let grade = "A";
console.log (
    grade === "A"
    ? "Excellent Result"
    : grade === "B"
    ? "Great Result"
    : grade === "C"
    ? "Good Result"
    : "Invalid"
);
console.log ("============SWITCH CASE============");
// switch case
const exp = "Durian"
switch(exp){
    case "Orange":
        console.log ("Price is $1");
        break;
    case "Coconut":
        console.log ("Price is $10"); 
        break;  // break gunanya untuk membatasi statement dalam kondisi
    case "Manggoes":
    case "Papaya":
        console.log ("Price is $3");
        break;
    default :
    console.log ("Sorry we are out of fruits "+exp);
    // Tanda Kutip dua ("") di kombinasikan dengan simbol (+) 
    // sedangkan (`) di kombinasikan dengan ($) dan ({})
}

let skor = 80;
switch (true){
    case (skor>=90) :
        console.log("Nilai A");
        break;
    case 75 :
        console.log ("Nilai B");
        break;
    default :
    console.log("Invalid");

}
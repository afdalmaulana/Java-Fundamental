//truthy falsy
console.log (Boolean(""));
console.log (Boolean(0));
console.log (Boolean(1));
console.log (Boolean("abc"));


console.log ("=================BATAS===========");

const celcius = 30;
console.log ("Diketahui suhu 30 Celcius");
let rumus = (celcius * 1.8) + 32;
console.log (`Suhu Celcius ${celcius} setelah di ubah ke Farenheit = ${rumus}`)

console.log ("=================BATAS===========");

let bil = 12;
let bilanganPrima = true;
for (let i=2; i<bil ; i++){
    // console.log (i);
    if(bil%i===0){
        bilanganPrima = false;
        break;
        }
    }
    if(bilanganPrima){
        console.log (`${bil} Adalah Bilangan Prima`);
    } else {
        console.log (`${bil} Bukan Bilangan Prima`);
    }

if (false) {
    console.log("hello")
} 
else {
console.log("hi")
}

console.log ("=================BATAS===========");
console.log ("================FIND SUM===========");
// sum adalah penjumlahan
let numb = 5; // untuk jumlah angka yang akan dihitung
let angka1 = 0 // jumlah nilai awal untuk perulangan
for (let k = 0; k <= numb ; k++){
    angka1 += k;
}
console.log (`Jumlah = ${angka1}`);


console.log ("=================BATAS===========");
console.log ("================FACTORIAL===========");
// factorial adalah kali (*)
let m = 5;
let factoriall = 1;
for (let j = 1; j <= m; j++){
    factoriall *=j ;

}
console.log (factoriall);

console.log ("=================BATAS===========");
console.log ("================Fibonacci===========");

let batas = 3;
let a1 = 0;
let a2 = 1;
let jml = 0;
for (let v = 0; v <= batas; v++){
    console.log (a1);
    jml = a1 + a2;
    a1 = a2;
    a2 = jml;
}
/*
kondisi v = 0 
a1 = 0
jml = 1;
a1 = 1;
a2 = 1;

kondisi v di increment jadi v = 1
a1 = 1
jml = 2
a1 = 1
a2 = 2

kondisi v di increment jadi v = 2
a1 = 1 <= ini yang tampil di output
jml = 3
a1 = 2
a2 = 3

kondisi v di increment jadi v = 3
a1 = 2
jml = 5
a1 = 3
a2 = 5

kondisi v di increment jadi v = 4 tapi tidak sesuai kondisi statement
*/

console.log ("==========BATAS=========")


const n3 = 7;
let num1 = 0,
  num2 = 1;
let fibonacci = [num1, num2];
for (let i = 2; i < n3; i++) {
  const nextNum = num1 + num2;
  fibonacci.push(nextNum);
  num1 = num2;
  num2 = nextNum;
}
console.log("Fibonacci:", fibonacci);


console.log ("=================BATAS===========");
console.log ("Define true if number is even or odd")
const numberCheck = 11;
if(numberCheck %2 === 0){
    console.log (`Number ${numberCheck} is even`);
    // console.log ("Number "+numberCheck+" is even")
}else{
    console.log (`Number ${numberCheck} is odd`);
}

console.log ("=================BATAS===========");

// example
let phoneNum = "0812b345a6789";
let counter = 0;
for (let o = 0; o<phoneNum.length; o++){
    console.log (phoneNum[o]);
    console.log (isNaN(phoneNum[o]));
    counter += isNaN(phoneNum[o]);
    if (isNaN(phoneNum[o]) === true || counter === 2 ){
        console.log ("Input Invalid");
        break;
    }
}
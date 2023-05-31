//1
const input = 9;
const batas = 10;
for (let i = 1; i <= batas; i++){
    console.log (`${input} X ${i} = ${input * i}`)
}
  
//3
// Write a code to convert centimeter to kilometer.
let panjangCm = 100000;
console.log ("Mengubah CM ke KM");
let formu = panjangCm / 100000;
console.log (`${panjangCm} CM = ${formu} KM`);


let huruf = "1";
let n = 2;
let boo = true;
console.log (typeof huruf);
console.log (typeof n);
console.log (typeof boo);


//12 
// Write a code to change every letter a into * from a string of input
// Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`
let text = "An Apple a day keeps the doctor awAy";
let ganti = text.replace(/a/ig, "*"); // simbol (/ /ig, "") merupakan regex atau mengganti suatu karakter menjadi karakter yang di inginkan
console.log (ganti);

console.log("Hello Woii");
let makan = "nasi";
console.log(makan);

//let adalah keyword
//hampir sama dengan var

var variableGlobal = "Pagi";
let ganti = "Ini akan di ganti";
ganti = "Siang";

console.log(ganti);
console.log("=======BATAS=======");

const message = "JavaScript";
const count = 1;
const bigNumber = 2032030213012n; //n pada akhir untuk bigInt
const isTrue = true;
const noData = null;
let noAssigned;
const person = {
    nama : "afdal",
    umur : 24
}
console.log (typeof message);
console.log (typeof count);
console.log (typeof bigNumber);
console.log (typeof isTrue);
console.log (typeof noData);
console.log (typeof person);
console.log (typeof noAssigned);
// typeof gunanya untuk mengetahui tipe data pada variable

console.log(message);
console.log(bigNumber);
console.log(person);
console.log(noAssigned);

console.log("========BATAS=======");

// string built in
//slice
let message1 = "Hello There";
console.log (message1);
let hasil =  message1.slice(0,3); //menghilangkan beberapa karakter
console.log (hasil);
let hasil2 = message1.slice(0,5);
console.log(hasil2);
console.log("========BATAS=======");
//concat
let message2 = "Purwadhika";
let message3 = "Jogja" ;
let result = message2.concat(" ", message3); //menggabungkan kata
console.log(result);

//split
let message4 = "Apa Kabar ?";
let hasil3 = message4.split(""); //memisahkan beberapa huruf
console.log (hasil3);

//indexOF
let message5 = "Welcome to the new universe";
let hasil4 = message5.indexOf("to"); //index untuk menyatakan pada urutan ke berapa
console.log (hasil4);

const name = "David";
const hasil5 = `Welcome, ${name}`; //menggunakan simbol sebelah angka 1 <-
console.log (hasil5);


//number built in
console.log ("Built in===========")
let number1 = 123;
console.log (number1);
let hasil6 = number1.toString();
console.log (typeof hasil6);

let string1 = "1123";
let string2 = "1123.2";
let num1 = parseInt(string1);
let num2 = parseFloat(string2);
console.log (num1);
console.log (num2);

let num3 = Math.floor(num2);
let num4 = Math.ceil(num2);
console.log (num3);
console.log (num4);

//type conversion
let str1 = String(123);
console.log(str1);
console.log(typeof str1);
const nomor = "3" * "3";
console.log(nomor);

let boo1 = Boolean(1); //apabila ada nilai dinyatakan true, sebaliknya dinyatakan false
console.log (boo1);

//date data type 
let now = new Date();
console.log (now);

let def = new Date(0); //deff <- default untuk tanggal javascript dibuat
console.log (def); 

let date = new Date ("1945-08-17");
console.log (date);

// get
let d = new Date().getFullYear();
console.log (d);
let d1 = new Date().getMonth(); 
let d2 = new Date().getDay();
let d3 = new Date().getHours();
let d4 = new Date().getDate();
console.log (d1);
console.log (d2);
console.log (d3);
console.log (d4);

//set 
let s = new Date();
s.setFullYear(2057); //ini proses inisiasi sendiri tahun agar tidak default
console.log(s);

let s1 = new Date();
s1.getHours(5);
console.log (s1);

// math operation
let a = 5;
let b = 5;
let c = 30;
let jum = a * b ;
let jum1 = a + b ;
let jum2 = a - b ;
let jum3 = c % 5;
console.log (a+b); // ini cara lebih simple daripada menuliskan keyword variable baru
console.log (jum);
console.log (jum1);
console.log (jum2);

//unary
let x = 1;
x = -x;
console.log (x);

//string concatenation
// concat adalah penggabungan
let k = "Hello" + " " + "World";
console.log (k);
let l = ("1" + 2);
console.log(l);
console.log ("NBA" +2 + "K");
console.log ("1"+1+1);
console.log (1+1+"1");
console.log("Batas---");
let o = 2;
o += 5; //hasilnya 7
o *= 2; // hasilnya 14
console.log (o);
o -= 2;
o /= 2;
console.log (o);
console.log ("========BATAS=====");

// increment decrement
let counter = 2;
counter++;
console.log(counter);
counter--;
console.log(counter);
counter--;
console.log(counter);

console.log ("=====post fix=======");
//postfix prefix
let preCounter = 2;
console.log(++preCounter); //prefix hasil setelah di increment
let preCounter1 = 2;
console.log(--preCounter1); //prefix hasil setelah di increment
let postCounter = 2;
console.log(postCounter--); //postfix menampilkan nilai sebelum di increment
console.log("=========BATAS======");
let angka1 = 90;
let angka2 = 80;
let angka3 = 90;
let angka4 = "90";
//equal
console.log (angka1 == angka2);
console.log (angka1 == angka3);
console.log (angka1 == angka4); //equal karena membaca dari nilai yang sama
console.log (angka1 === angka4); //strict equality = membaca dari nilai & tipe data sama
console.log ("========BATAS=====");
//not equal
console.log (angka1 != angka2);
console.log (angka1 !== angka4);
console.log ("=======BATAS====");
//lebih banyak dari
console.log(angka1 > angka2);


console.log ("Exercise");

const panjang = 10;
const lebar = 5;
let luasPersegi = (panjang*lebar);
console.log("Diketahui Panjang = 50, Lebar = 5");
console.log ("1. Maka Luas Dari Persegi = "+""+luasPersegi);
let kelilingPersegi = 2 * (panjang+lebar);
console.log ("2. Maka Keliling Dari Persegi = "+""+kelilingPersegi);
console.log("Menghitung Diameter, Luas, dan Keliling Lingkaran");
const phii= 3.14;
let r = 7;
let diameterLingkaran = 2 * r;
let luasLingkaran = phii * (r * r);
let kelilingLingkaran = phii*diameterLingkaran;
console.log("3. Maka Diameter lingkaran = "+diameterLingkaran);
console.log("Maka Luas Dari Lingkaran = "+luasLingkaran);
console.log("Maka Keliling Lingkaran = "+kelilingLingkaran);

const sudutA = 65;
const sudutB = 60;
let sudutSegitiga = 180 - (sudutA+sudutB);
console.log ("Diketahui besar sudut segitiga = 65, 60, ...?");
console.log("4. Besar Sudut Segitiga yang belum di ketahui adalah = "+sudutSegitiga);

console.log("5. Selisih antara dua tanggal");
let tanggal1 = new Date ("2023-05-20"); // (2023,05,20) <= ini juga boleh
let tanggal2 = new Date ("2023-05-16");
console.log(tanggal1);
console.log(tanggal2);
let selisihWaktu = tanggal1.getTime() - tanggal2.getTime();
let selisihHari = selisihWaktu / (1000 * 3600 * 24);
console.log("Jumlah Selisih hari pada dua tanggal tersebut = "+Math.abs(selisihHari));
//Math.abs adalah nilai absolut untuk menghilangkan nilai negatif

console.log("6. Mengubah 400hari menjadi tahun, bulan dan hari");
const day  = 500;
const years = Math.round(day/365); 
const months = Math.round((day%365)/30);
const days = Math.round((day%365)%30);
console.log (years+"year,"+months+"month,"+days+"days");
//Math.floor gunanya dibulatkan otomatis ke bawah => ex. nilai = 1,6 hasilnya tetap 1
/*Math.round gunanya dibulatkan tergantung nilainya ex. nilai =1,6 hasilnya jadi 2
 * contoh nilai 1,6 => 2
 * contoh nilai 1,4 => 1 */

// write a code to find area of rectangle
let panjang = 10;
let lebar = 5;
let rumusRec = panjang * lebar;
console.log (`Area of rectangle = ${rumusRec}`);

let perimRec = 2 * (panjang+lebar);
console.log (`Keliling rectangle = ${perimRec}`);

let date1 = new Date("2023-05-16");
let date2 = new Date("2023-05-20");
console.log (date1);
console.log (date2);
let selisiWaktu = date2.getTime() - date1.getTime();
let selisihHarii = selisiWaktu / (1000 * 3600 * 24);
console.log ("Selisih Hari "+Math.abs(selisihHarii));

let tanggal = 400;
let tahun = Math.round(tanggal/365);
let bulan = (Math.round((tanggal%365)/30));
let hari = Math.round((tanggal%365)%30);
console.log (`400 hari = ${tahun} tahun, ${bulan} Bulan, ${hari} Hari`)
// console.log (tahun);


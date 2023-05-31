// 10
let angka = 98566890;
let splitAngka= angka.toString().split("").sort().toString().replace(/,/g,"");
console.log(splitAngka);
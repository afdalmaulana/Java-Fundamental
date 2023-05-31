function nilaiMax (nilai){
    // let tampung = 0;
    let urut = nilai.sort((a,b) => b-a);
    console.log (urut);
    let hasil = urut.filter((item) => item === urut[0]);
    return hasil.length;
};
let angka = [10,11,12,11,10,10,10,12];
console.log (nilaiMax(angka));

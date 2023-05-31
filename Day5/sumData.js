function sumData (arr){
    let tampung = 0;
    let array =  (arr.filter((item) => typeof item === "number")); //filter typeof adalah menyaring semua data yang memiliki tipe data number
    for (let i = 0; i < array.length; i++){
        tampung += array[i];
    }
    return tampung;
};
// let data = [10,20,40,10,50,30,10,60,10];
let data = [1,'String',null,false,undefined,2,"yes",undefined];
// data.forEach((value, index));
// console.log (value);
let b = sumData(data);
console.log(b);

// cara 2
function nilaiSum(a){
    let simpan = 0;
    for (let i = 0; i < a.length; i++){
        simpan += a[i];
    }
    return simpan;
}
let angka = [10,20,40,10,50,30,10,60,10];
let x = nilaiSum(angka);
console.log (x);
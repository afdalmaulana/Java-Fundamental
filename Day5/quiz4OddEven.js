function oddEven(arr){
    let tampungGenap = 0;
    let tampungGanjil = 0;
    for (let i = 0; i < arr.length; i++){
        console.log (arr[i]);
        if (arr[i] % 2 === 0){
            tampungGenap++
        }else{
            tampungGanjil++;
        }
    }
    return [tampungGanjil, tampungGenap];
};
let x = [10,11,12,13]
// let x = [1,3,5,7,9];
console.log(oddEven(x));

// cara 2
function ganjilGenap(nilai){
    let genap = nilai.filter((item) => item %2 === 0);
    let ganjil = nilai.filter((item) => item %2 !== 0);
    let hasil = (`${ganjil.length}, ${genap.length}`);
    console.log (hasil);
};
let a = [10,11,12,13];
console.log (ganjilGenap(a));

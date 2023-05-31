// function multi(n, ...sisa){
//     let tampung = [];
//     tampung = sisa.slice(0,n);
//     return tampung;
// };
// let data = multi(5,10,24,3,6,7,8);
// console.log (data);
// // let data1 = (5,10,24,3,6,7,8); // kalau data berisi banyak dan bukan array makanya tidak dapat di tampilkan
// // console.log(multi(5,10,24,3,6,7,8)) // harus di tulis dengan cara begini


// const multy = (x, ...data) => {
//     let simpan = [];
//     simpan = data.slice(0, x);
//     console.log (simpan);
// };
// multy (5,5,10,24,3,6,7,8)


// cara 3
const molti = (maxSize, ...manyNum) => { // maxSize berisi variable 5, sedangkan ...manyNum adalah menampung sisanya
    let arr = [];
    console.log (maxSize);
    console.log (manyNum);
    console.log (manyNum.length)
    for (let i = 0; i<manyNum.length; i++){
        arr.push(manyNum[i]);
        if(arr.length === maxSize){
            break;   
        }
    }
    return arr;
}
let a = molti (5,1,2,3,4,6,6,7,8,9);
console.log (a);
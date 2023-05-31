// function faktorial(number){
//     let tampung = 1;
//     for (let j = 1; j <= number; j++){
//         tampung *=j ;
//         console.log(tampung);
        
//     }
//     return tampung;
// };
// let x = faktorial(4);
// console.log (x);

function fakTorial(n){
    if (n === 0){
        return 1;
    } else {
        let nextNumber = n-1;
        return n * fakTorial(nextNumber);
    }
}
let a = 3;
console.log (fakTorial(a));
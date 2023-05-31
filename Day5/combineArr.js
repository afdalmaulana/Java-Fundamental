// function combineArray (a,b){
//     console.log (a);
//     console.log (b);
//     let gabung = a.concat(b);
//     return gabung;
// };
// let arrayA = [1,2,3,4];
// let arrayB = [5,6,7,8];
// console.log (combineArray(arrayA,arrayB));


// cara apabila 3 variable
function combineArray (i,...j){ // i berisi value pada variable arrayX [1,2,3,4]  dan ...j menampung value pada variable arrayY dan arrayZ
    console.log (i);
    console.log (j);
    let gabung = i.concat(...j);
    return gabung;
};
let arrayX = [1,2,3,4];
let arrayY = [5,6,7,8];
let arrayZ = [1,2,3];
console.log (combineArray(arrayX,arrayY,arrayZ));
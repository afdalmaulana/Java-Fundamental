function nampilGenap(array){
    let tampung = [];
    for (let x = 0; x <= array.length; x++){
        if (array[x] % 2 == 0){
            tampung.push(array[x]);
        }
    }
    return tampung;
};
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
console.log(nampilGenap(array))



function removeOdd(array){
    let simpan = [];
    for (let i = 0; i <= array.length;i++){
        if (array[i] % 2 == 0){
            simpan.push(array[i]);
        }
    }
    return simpan;
};
let data = [1,2,3,2,4,5,7,6,7,8,9,10,11,12];
console.log (removeOdd(data));


// validasi
const findEven = (arr1) => {
    let arr = [];
    for (let i = 0; i < arr1.length; i++){
        if(arr1.indexOf(arr1[i]) === i && arr.indexOf(arr1[i]) === -1){
            // console.log (arr1.indexOf(arr1[i]));
            // console.log (arr.indexOf(arr1[i]));
            console.log (arr1.indexOf(arr1[i]) === i && arr.indexOf(arr1[i]) === -1);
            arr.push(arr1[i]);
        }
    }
    console.log (arr.filter((item) => item % 2 === 0));
};
let a = [1,2,2,4,5];
console.log (findEven(a));

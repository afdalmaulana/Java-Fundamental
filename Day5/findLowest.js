// with
function findLowest (arr) {
    let lowest = 0;
    let high = 0;
    let length = arr.length;
    console.log (length);
    let sum = 0;
    arr.sort((a,b) => a-b); // kecil ke besar
    console.log (arr);
    lowest = arr[0]; 
    console.log (lowest);
    high = arr[length-1];
    for (let i = 0; i < length; i++){
        sum += arr[i];
    }
    console.log ([lowest, high, sum / length].join())

};
let a = [6,4,3,2,5,1]
findLowest(a);

// without 



// menggunakan fuction arrow
// const lowHigh = (arr1, arr2) => {

// };
// let x = [1,2,3,4,5]
// lowHigh (x);
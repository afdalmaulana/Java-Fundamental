function sumDuplicate (arr){
    let tampung = [];
    for(let i = 0; i < arr.length; i++){
        if(arr.indexOf(arr[i]) !== i && tampung.indexOf(arr[i]) === -1){
        tampung.push(arr[i]);
        }
    }
    return tampung.reduce((a,b) => a+b)
};
let x = [10, 20, 40, 10, 50, 30, 10, 60, 10];
console.log (sumDuplicate(x));
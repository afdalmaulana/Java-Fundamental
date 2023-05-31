// function addArray (word){
//     let tambah = "";
//     tambah += word.push("Tas");
//     return word;
// };
// let a = ["Pulpen", "Penghapus", "Tumbler"];
// console.log (addArray(a));

// let x = ["Laptop", "Kamera", "Ipad"];
// let tambah = x.push("Iphone");
// console.log (x);

// cara 1
function addArray (arr1, num1){
    if (arr1.includes(num1)){
        return arr1;
    }else{
        return [...arr1,num1];
        
    }
};
let a = [1,2,3,4,5];
let b = 9;
let result = addArray(a,b);
console.log (result);

// cara 2
const addElement = (arr,str) => {
    let index = arr.indexOf(str);
    if(index === -1){
        arr.push(str);
    }
    return arr;
}
let x = ["hello", "world"];
let y = "there";
let z = addElement(x,y);
console.log (z);
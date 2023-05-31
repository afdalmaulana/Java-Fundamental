// const findDuplicate = (arr) => {
//     let duplicate = [];
//     for (let i = 0; i < arr.length; i++) {
//       // console.log(arr[i])
//       if (arr.indexOf(arr[i]) !== i && duplicate.indexOf(arr[i] === -1)) { //kalau terdapat array kosong maka isinya = -1
//         console.log(arr.indexOf(arr[i])); // 1,1,3,3,4
//         // console.log(duplicate.indexOf(arr[i]));
//         // console.log(arr.indexOf(arr[i]) !== i);
//         // console.log(duplicate.indexOf(arr[i] === -1));
//         duplicate.push(arr[i]);
//       }
//     }
//     // return duplicate.reduce((a,b) => a+b); //reduce adalah penjumlahan dalam array => [1,3,4] = 3+1 = 4, 4+4=8
//     return duplicate;
//   };
//   let a = [1, 1, 3, 3, 4]; //1-->0,0; 1-->0,1; 3-->2,2 3-->2,3 4-->4,4
//   let b = findDuplicate(a);
//   console.log(b);

// cara 2
// function arrayChecker(...parameter) {
//     console.log(parameter);
//     console.log (parameter.length)
//     let result = [];
//     for (let i = 0; i < parameter.length; i++) {
//         if (result.includes(parameter[i]) == false) {
//           result.push(parameter[i]);
//         }
//     }
//     return result;
// }

// console.log(arrayChecker(1, 2, 3, 3, 4, 4, 4, 4, 5, 6, 6, 6, 7, 1, 5, 6));
// console.log(arrayChecker("Mango", "Mango", "Orange", "Orange", "Orange", "Orange", "Pinneapple", "Banana", "Grape", "Orange"));

function duplicates(arr) {
  //TODO: return the array of duplicates from arr
  
  let tampung = [];
  for (let i = 0; i < arr.length; i++){
    if (!tampung.includes(arr[i])){
      tampung.push(arr[i]);
    } 
  }
  return tampung;
}
let xo = [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"] ;
console.log (duplicates(xo)) 

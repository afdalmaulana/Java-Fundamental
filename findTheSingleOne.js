// // mencari nilai yang tidak double
// function findTheSingleOne(num){
//     // let hitung = 0;
//     // num.forEach((element) => {
//     //     hitung ^= element;
//     // });
//     // return hitung;
//     // let tampung = 0;
//     num.sort();
//     console.log (num)
//     for(let i = 0; i < num.length; i+=2){
//         if(num[i] !== num[i+1]){
//             return num[i];
//         }
//     }
// }
// let hitung = [2,2,1];
// // countDouble(number);
// console.log (findTheSingleOne(hitung));

// // cara 2
// function findSingle(arr) {
//     let single = [];
//     let temp;
//     for (let i = 0; i < arr.length; i++) {
//       temp = arr.filter((a) => a == arr[i]);
//       console.log(temp);
  
//       if (temp.length == 1) {
//         single.push(arr[i]);
//       }
//     }
//     return single.join();
//   }
  
//   console.log(findSingle([4, 1, 2, 1, 2]));

  // cara 3 
  function beda(num){
    let unik = [];
    num.forEach((element) => {
        if (num.indexOf(element) === num.lastIndexOf(element)){
            unik.push(element);
        }
    });
    return unik;
  }
  let g = [2,1,2,3];
  console.log (beda(g));
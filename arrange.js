function arrange(arr){
    arr.sort();
    let tampung = [];
    let awal = 0;
    let akhir = arr.length - 1;
    while(awal <= akhir){
        tampung.push(arr[awal]);
        if(awal !== akhir)
        tampung.push(arr[akhir]);
        awal++;
        akhir--;
    }
    return tampung;
};
let a = [1,2,3,4,5];
console.log(arrange(a))


// function printArrayOrder(arr) {
//     // Sorting the array in ascending order
//     arr.sort()
//     // Creating a new array to store the elements in the desired order
//     const result = [];
//     // Initializing two pointers
//     let left = 0;
//     let right = arr.length - 1;
//     // Looping until the pointers meet or pass each other
//     while (left <= right) {
//       // Adding the smallest number
//       result.push(arr[left]);
//       // Adding the largest number (if not equal to the smallest number)
//       if (left !== right) {
//         result.push(arr[right]);
//       }
//       // Moving the pointers towards the center
//       left++;
//       right--;
//     }
//     // Printing the result array
//     console.log(result);
//   }
  
//   // Example usage
//   printArrayOrder([5, 2, 9, 1, 8, 3, 7, 4]);
  
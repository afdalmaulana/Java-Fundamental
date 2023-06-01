function generateLargestNumber(arr) {
    // Mengurutkan array secara menurun (descending)
    arr.sort();
    let baru = arr.reverse().join("")
    return parseInt(baru)
    // Menggabungkan semua digit dalam array menjadi sebuah string
    // const largestNumber = arr.join('');
  
    // Mengembalikan angka terbesar yang mungkin
    // return parseInt(largestNumber);
  }
  
  // Contoh penggunaan
  console.log(generateLargestNumber([1,1,2,2])); // Output: 98327
  console.log(generateLargestNumber([1,2,3,4,5,6,7])); // Output: 98327
  console.log(generateLargestNumber([9, 3, 27, 8])); // Output: 98327
  console.log(generateLargestNumber([5, 2, 1, 9, 50])); // Output: 95521
  
  
function anagram(word,banding){
    let ubah = word.toLowerCase().replace(/ /ig, "").split("").sort().join("");
    console.log(ubah);
    let banding1 = word.toLowerCase().replace(/ /ig, "").split("").sort().join("");
    console.log (banding1);
    if(ubah.includes(banding1)){
        return 1;
    }
    return 0;


}
let kata = "Camry";
let pembanding = "Mycar"
console.log(anagram(kata,pembanding));

// // function isAnagram(str1, str2) {
// //     // Remove whitespace and convert strings to lowercase
// //     const cleanStr1 = str1.replace(/\s/g, "").toLowerCase().replace(/ /g,"");
// //     const cleanStr2 = str2.replace(/\s/g, "").toLowerCase();
// //     console.log (cleanStr1);
// //     console.log (cleanStr2);
// //     // Check if the sorted strings are equal
// //     const sortedStr1 = cleanStr1.split("").sort().join("");
// //     console.log (sortedStr1);
// //     const sortedStr2 = cleanStr2.split("").sort().join("");
// //     console.log (sortedStr2);
  
// //     return sortedStr1 === sortedStr2;
// //   }
  
// //   // Example usage
// //   const string1 = "dirty room";
// //   const string2 = "dormitory";
// //   const result = isAnagram(string1, string2);
// //   console.log(result); // Output: true
  

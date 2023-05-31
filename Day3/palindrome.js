//2
// Write a code to check whether a string is a palindrome or not.

let world = "Race CaR";
let lowerWord = world.toLowerCase().replace(/ /g, "");
console.log (lowerWord);
console.log (world.length);
let reverse = "";
for (let h = lowerWord.length -1; h >= 0; h--){
/*
pada kondisi for di atas terdapat vatiable h untuk menampung perulangan yang akan di gunakan
untuk memisahkan huruf. kenapa h = lowerWord.length-1? karena kita akan menampilkan huruf 
dari belakang. Sesuai dengan jumlah kata berjumlah 5, jadi apabila ingin 
perulangan yang akan berhenti jadi akan dikurangi.
*/
    reverse += lowerWord[h];
    console.log(lowerWord[h]); // perulangan menampilkan huruf satu per satu dari belakang
}if (reverse === lowerWord){
    console.log ("Palindrome")
}else{
    console.log ("Palingroam")
}




// let kata = "maDaM";
// let ubah = kata.toLowerCase();
// for (let i = 0; i < ubah.length; i++){
//     if (ubah[i] != ubah[ubah.length - (i+1)]){
//       console.log ("Bukan Palindrome");
//       break;
//       }else{
//         console.log ("Palindrome");
//         break;
//         }
//   }
  
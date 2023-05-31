// function triangleHeight (height){
// let tampung = "";
// let counter = 1;
// for (let a = 1; a <= height; a++){
//     console.log (a);
//     for (let b = 1; b <= a; b++){
//         tampung += String(counter).padStart(2,"0") + " ";
//         counter++
//     }
//     tampung += "\n";
// }
// return tampung;
// };
// console.log (triangleHeight(4));

// // cara kedua
function triangle(n){
    let result = "";
    // menggunakan nested looping => artinya for dalam for
    for (let i = 1; i <= n; i++){
        // console.log (`Index : ${i}`); // menampilkan urutan looping 
        for(let j = 1; j <= i; j++){
            // console.log (j);
            if (j <= 9){
                result += `0${j} `;
            } else{
                result += `${j}`;
            }
        }
        result += "\n";
    }
    console.log (result);

}
console.log (triangle(5))
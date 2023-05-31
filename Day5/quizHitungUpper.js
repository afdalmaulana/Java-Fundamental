function hitungUpper(s){
    let upper =0;
    let low = 0;
    let tampung = [];
    let data = s.replace(/[\W_ 0-9]+/ig,"")
    for (let i = 0; i < data.length; i++){
        if(data[i] === data[i].toUpperCase()){
            upper++;
        }else{
            low++
        }
    }
    return tampung = [low,upper];
}
let kata = "HellO Word!";
console.log (hitungUpper(kata));


// Purw4dhika
// function hitungUpper(s){
//     let upper =0;
//     let low = 0;
//     let tampung = [];
//     let data = s.replace(/[! 0-9]+/ig,"")
//     console.log (data);
//     for (let i = 0; i < data.length; i++){
//         if(data[i] === data[i].toUpperCase()){
//             upper++;
//         }else{
//             low++
//         }
//     }
//     return tampung = [low,upper];
// }
// let newKata = "Purw4dhika";
// console.log (hitungUpper(newKata));

function upperLower(s) {
    // Write your code here
    let upper = 0;
    let low = 0;
    let tampung = [];
    let ubah = s.replace(/!, 0-9/ig,"")
    for (let i=0; i < ubah.length; i++){
        console.log (tampung);
        if (ubah[i] === ubah[i].toUpperCase()){
            upper++
        }else{
            low++
        }
    }
        return tampung = [low, upper];
}

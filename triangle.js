function triangle (m){
let tampung = "";
for (let i = 1 ; i <= m ; i++){
    console.log (`X : ${i}`);
    for (let j = 1; j <= i; j++){ //nested looping for dalam for
        console.log (`L : ${j}`);
        tampung += ` ${j}`;
    }
    tampung += "\n";
}
console.log (tampung);

};
triangle(5);

function bintangSegitiga(numRows){
    // console.log (numRows)
    let hasil = ""
    for (let i = 1; i <= numRows; i++){
        for (let j = 1; j <= i; j++){
            hasil += (`*`)
        }
        hasil += "\n"
    }
    return hasil
}
let n = 5;
console.log(bintangSegitiga(n))
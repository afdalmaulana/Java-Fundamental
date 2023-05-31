function palindrome (kata){
    let tampung = kata.toLowerCase().replace(/ /ig, "");
    // console.log (tampung);
    // console.log (tampung.length);
    let reverse = "";
    for (let i = tampung.length - 1; i >= 0; i--){
        reverse += tampung[i];
        console.log (tampung[i]);
    }
    if (reverse === tampung){
        console.log ("Palindrome")
    } else {
        console.log ("Bukan");
    }
    return reverse;
};
let x = ("masasih");
palindrome(x);

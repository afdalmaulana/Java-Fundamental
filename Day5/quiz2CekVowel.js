function vowel(kata){
    let tampung = 0;
    let word = kata.toLowerCase();
    // return word;
    for (let i=0; i < word.length; i ++){
        if (word[i] === "a" || word[i] === "i" || word[i] === "e" || word[i] === "u" || word[i] === "o"){
        tampung++;
    }}return tampung;
};
// let data = "Congratulations"
// console.log (vowel(data));

// cara 2
function cekVowel(huruf){
    let tampung = [];
    let vowel = ["a","e","i","u","o"];
    let ubahVowel = huruf.toLowerCase().split("");
    ubahVowel.forEach((bebas) => {
        if (vowel.includes(bebas)){
            tampung.push(bebas);
        }
    });
    // for (let i=0; i < ubahVowel.length; i++){
    //     if (ubahVowel.includes(vowel[i])){
    //         tampung++;
    //     }
    // }
    return tampung.length;
    
};
let kalimat = "Congratulationos"
console.log (cekVowel(kalimat));

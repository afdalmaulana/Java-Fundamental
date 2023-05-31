function sumLetter(word){
    const letterTonumber = {
        " ": 5,
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
        "f": 6,
        "g": 7,
        "h": 8,
        "i": 9,
        "j": 10,
        "k": 11,
        "l": 12,
        "m": 13,
        "n": 14,
        "o": 15,
        "p": 16,
        "q": 17,
        "r": 18,
        "s": 19,
        "t": 20,
        "u": 21,
        "v": 22,
        "w": 23,
        "x": 24,
        "y": 25,
        "z": 26
    };
      let simpan = "";
      let tampungHuruf = 0;
      let total = 0;
    let tampung = word.toLowerCase();
    for (let i = 0; i < tampung.length; i++){
        // console.log (tampung[i]);
        simpan = tampung[i];
        // console.log (simpan);
        tampungHuruf = letterTonumber[simpan];
        // console.log(tampungHuruf);
        if(tampungHuruf){
            total += tampungHuruf;
        }else{
            total += 10;
            }
        }
        return total;
        // console.log (`Di ubah menjadi ${simpan}`);
    };
let x = sumLetter("Purwadhika");
console.log (x);


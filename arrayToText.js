function convertArrayToText(arr) {

    const numberToLetter = {
      0: ' ',
      1: 'a',
      2: 'b',
      3: 'c',
      4: 'd',
      5: 'e',
      6: 'f',
      7: 'g',
      8: 'h',
      9: 'i',
      10: 'j',
      11: 'k',
      12: 'l',
      13: 'm',
      14: 'n',
      15: 'o',
      16: 'p', // 16 adalah key(property), dan p adalah value
      17: 'q',
      18: 'r',
      19: 's',
      20: 't',
      21: 'u',
      22: 'v',
      23: 'w',
      24: 'x',
      25: 'y',
      26: 'z'
    };

    // console.log (numberToLette
    let tampungAngka = 0;
    let letter = "";
    for (let i = 0; i < arr.length; i++) {
            tampungAngka = arr[i];
            console.log(tampungAngka);
            // console.log(`ini adalah tampung ${tampungAngka}`)
            letter += numberToLetter[tampungAngka];
            // console.log (`Di ubah menjadi ${letter}`);
            /*  
                numberToletter[tampungAngka] adalah numberToletter adalah object dan [tampungAngka] adalah key
                jadi numberToletter adalah menunjukk ke value pada object
            */
        }
        return letter;
    }
const arr = [10,1, 11, 1, 18, 20, 1, 0, 2, 1, 20, 1, 13];
console.log(convertArrayToText(arr));
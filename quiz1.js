function primeChecker(nilai){
    for (let i = 2; i < nilai; i++) {
    //     console.log (i);
        if (nilai % 2 == 0) {
            return 0; //bukan prima
        }
    }
    return 1; //prima
};
let x = primeChecker(21);
console.log (x);
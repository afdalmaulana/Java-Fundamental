function fizzBuzz(x){
    let tampung = "";
    for(let a = 1; a <= x; a++){
        if (a % 5 == 0 && a % 3 == 0 ){
            tampung += "FizzBuzz";
        }else if(a % 5 == 0){
            tampung += "Buzz"
        }else if(a % 3 == 0){
            tampung += "Fizz";
        }else{
            tampung += a + " ";
        }
    }
    return tampung;
};
console.log (fizzBuzz(30));

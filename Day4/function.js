// fuction declaration
function square (number){
    return number * number ;
}
let x = square(3);
console.log (x);

// function exxpresion
let sum = function(n){
    return n + n;
};
let a = sum(4);
console.log (a);

// function arrow
let greeting = (n) => {
    console.log ("Hello World")
    console.log (n*n)
} ;
greeting(3);


// function scope
// function salam(){
//     let hello = "Apa Kabar"; 
//     return hello;
// } // ini eror karena function scope karena ga bisa mengakses console diluar scope
// console.log (hello);

// parameter argument 
function getMessage (nama){ // isi dalam function () namanya parameter
    const hello = "Hello";
    return hello + " " + nama;
}
console.log (getMessage("Afdal")); // isi ("Afdal") namanya argument

// default parameter
let multiply = (a, b = 2) => { // default variable => inisiasi awal pada parameter
    return a + b;
}
console.log (multiply(5)); // apabila di inisiasikan console.log(multiply(5,3)) maka nilai awal 2 di timpa menjadi 3

//rest parameter
function myFunc (a,b,...manyMore){ 
    console.log ("a :", a)
    console.log ("b :", b)
    console.log ("many more :", manyMore)
};
myFunc (1,2,3,4,5,6,7,8); // parameter manyMore gunanya menampung sisa variabel yang ada

// nested fuction
// merupakan function dalam function
function getMessage1(firstName){
    function sayHello(){
        return "hello " + firstName + " ";
    }
    function welcomeMessage(meet){
        return "Welcome to Purwadhika";
    }
    return sayHello() + "" + welcomeMessage();
}
let message = getMessage1("Afdal");
console.log (message);

// closure
let greet = (name) => {
    let defaultMess = "Hello";
    return function (){
        return defaultMess + " " + name;
    };

};
let greetingAf = greet("Afdal");
console.log (greetingAf());

// currying
function multiplier (num1){
    return function(num2){
        return num2 * num1;
    };
};
const multiplier2 = multiplier(3);
console.log (multiplier2(5));

// pre currying
let preCurrying = (n1, n2) =>{
    return n2 - n1;
};
// console.log (preCurrying(3,5));

// post currying
let postCurrying = (n1) => {
    return function (n2){
        return n2 - n1 ;
    };
};
// console.log (postCurrying(3)(5));

// recursive
function countDown(fromNumber){
    console.log (fromNumber);
    let nextNumber = fromNumber - 1;
    if (nextNumber > 0){
        countDown(nextNumber);
    }
}
countDown(3);


// predefiend function
// isNan
let z = "55";
console.log(isNaN(z));

// parseInt
console.log (parseInt(z));
console.log (typeof(z));


function tampilGanjilGenap(arr){
    let tampungGenap = [];
    let tampungGanjil = [];
    arr.forEach((numb) => { // forEach berguna untuk looping
        if(numb % 2 === 0){
            tampungGenap.push(numb);
        }else{
            tampungGanjil.push(numb);
        }
    });
    return [tampungGenap, tampungGanjil];
};
let x1 = [1,2,3,4,5,6,7];
console.log(tampilGanjilGenap(x1));
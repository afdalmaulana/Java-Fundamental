// // 8 
let kata = "ThE QuiCk BrOwN Fox";
let m = "";

for (let i = 0; i < kata.length; i++) {
    if (kata[i] == kata[i].toUpperCase()) {
        // kata[i] == kata[i].toUpperCase adalah membandingkan huruf pada index dengan huruf 
        // yang awalnya udah uppercase (tergantung pada kondisi)
        m += kata[i].toLowerCase();
    } else {
        m += kata[i].toUpperCase();
    }
}
console.log(m);

// console.log(swap('The Quick Brown Fox')); // tHE qUICK bROWN fOX
// console.log(swap('So, today we have REALLY good day')); // sO, TODAY WE HAVE really GOOD DAY



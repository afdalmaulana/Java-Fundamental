console.log ("Define true if number is even or odd")
function ganjilGenap(numberCheck){
// let numberCheck = 11;
let tampung = ""
for(let i = 0; i <= numberCheck; i++){
    // console.log (i);
    if(i % 2 === 0){
        console.log("Number "+ i +  " is even");
        // console.log (`Number ${numberCheck} is even`);
        // console.log ("Number "+numberCheck+" is even")
    }else {
        // tampung += `Number ${numberCheck(i)} is odd`;
        console.log("Number "+ i+  " is odd");
        // console.log (`Number ${numberCheck} is odd`);
    }
}
};
(ganjilGenap(10));
// kalau cuman satu yang mau di tentukan, tidak usah pakai perulangan
// jadi (ganjilGenap(10)) => 10 adalah jumlah yang akan mau diulang




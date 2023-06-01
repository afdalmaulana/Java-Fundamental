function excel(num){
    let hasil = 0;
    num = num.toUpperCase();
    for (let i = 0; i < num.length; i++){
        let charCode = num.charCodeAt(i) - 64; // A menurut unicode = 65, B = 66
        console.log (charCode) // charCodeAt => built in method untuk menampilkan huruf dalam bentuk angka
        hasil = hasil * 26 + charCode;
    }
    return hasil;
}
let huruf = "Ab";
console.log (excel(huruf));

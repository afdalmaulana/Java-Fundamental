function bintang(){
    let a = 5;
    let tampung = ""
    for (let x= 0; x < a; x++) {
        for(let y= 0; y <= x; y++){
            tampung += "*"
        }
        tampung += "\n"
    }
    console.log(tampung);
}
// bintang();
bintang();

let awal = 1;
let batas = 10;
for (awal; awal<=batas; awal++){
    // console.log (i);
    if(awal < 2){
        return true;
    }
    if(awal % 2 === 0){
        console.log (`${awal} adalah bukan prima`)
    } else {
        console.log (`${awal} adalah prima`)
    }
}
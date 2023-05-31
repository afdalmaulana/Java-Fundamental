console.log ("===========FOR=========")
// for
for (let x = 0 ; x < 3 ; x++){
    console.log ("Hello");
}

console.log ("==========While===========")
// while 
let x = 0;
while(x<3){
    console.log ("WOI");
    x++;
}

console.log ("============Do While==========")
// do - while 
// melakukan sekali lalu mengecek kondisi
let i = 4;
do{
    console.log ("HALOO");
    i++;
}while(i<=5);


//break
let awal = 2;
while (true){
    let value = 1;
    if (awal === 5) break;
    awal += value; // + 1 pada nilai value
    console.log (`Nilai : ${awal}`);
}

for (let a=0; a<5; a++){
    if (a===3)continue; // continue untuk skip apabila sesuai kondisi?
    //apabila inisiasi awal sesuai dengan kondisi, maka nilai yang sesuai kondisi akan di skip
    console.log (a);
}


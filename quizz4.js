// function rupiah(number) {    
//     let sisa = number;     //74.000, 24.000, 4000, 2.000, 2.000, 0
//     let simpan = [];    //50.000 , 20.000 , 2.000, 2.000
//     for (let i = 0; i < sisa; i++) {        
//         console.log (i);
//         if (sisa > 100000) {            
//             simpan.push(100000);            
//             sisa-=100000;        
//         }else if(sisa<100000 && sisa>=75000){            
//             simpan.push(75000);            
//             sisa-=75000;        
//         }else if(sisa<75000 && sisa>=50000){            
//             simpan.push(50000);            
//             sisa-=50000;        
//         }else if(sisa<50000 && sisa>=20000){            
//             simpan.push(20000);            
//             sisa-=20000;        
//         }else if(sisa<20000 && sisa>=10000){            
//             simpan.push(10000);            
//             sisa-=10000;        
//         }else if(sisa<10000 && sisa>=5000){            
//             simpan.push(5000);            
//             sisa-=5000;        
//         }else if(sisa<5000 && sisa>=2000){            
//             simpan.push(2000);            
//             sisa-=2000;        
//         }else if(sisa < 1000 && sisa > 500){
//             simpan.push(1000);
//             sisa-=1000;
//         }    
//     }     
//     return simpan
// }
let a = 74000;
// console.log(rupiah(a));

function uangKembalian(rupiah){
    const kembalian = [100000,50000,20000,10000,5000,2000,1000,500];
    let tampung = [];
    kembalian.forEach((rp) => {
        while(rupiah>=rp){
            tampung.push(rp);
            rupiah -= rp;
        }
        
    })
    return tampung;
}
// let x = 74000;
console.log(uangKembalian(a));


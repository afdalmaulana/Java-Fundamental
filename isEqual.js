// // create a function to check if two object are equal
// function equalObject(){
//     let simpanTrue = ""
//     let simpanFalse = ""
//     let obj1 = {
//         name: "Afdal",
//         age: 17,
//     };
//     let obj2 = {
//         name: "Afdal",
//         age: 17,
//     };
//     for 
//     if (obj1 === obj2){
//         simpanTrue++;
//     }else{
//         simpanFalse++
//     }
// }
// console.log (equalObject)
function isEqual(obj1, obj2) {
    const obj1Keys = Object.keys(obj1); 
    //membuat const obj1Keys untuk menampung property pada obj1(data1) menggunakan Object.keys
    const values1Keys = Object.values(obj1);
    console.log (obj1Keys);
    console.log (values1Keys);
    const obj2Keys = Object.keys(obj2);
    const values2Keys = Object.values(obj2);
    console.log (obj2Keys);
    console.log (values2Keys);

    for(let i = 0; i < Math.max(obj1Keys.length, obj2Keys.length); i++){
        if (!obj1Keys.includes(obj2Keys[i])){ //ini validasi pertama (key)
            return "Object Tidak Sama"
        }
    }
    for(let i = 0; i < Math.max(values1Keys.length, values2Keys.length); i++){
        if (!values1Keys.includes(values2Keys[i])){ //ini validasi kedua (values)
            return "Values Tidak Sama"
        }
    }
    return "Object dan Values Sama"
};
//     for (let key in obj1Keys){
//         if (obj1Keys[key] !== obj2Keys[key]){ //apabila kondisi !==(tidak sama), maka => return tidak sama
//             return "Object Berbeda"
//         }
//     }

// };

// object mengakses lewat property bukan index
let data1 = {
    nama : "Afdal", //property = key
    age : 17
};
let data2 = {
    nama : "Afifa",
    age : "17"
};
let x = isEqual(data1,data2);
console.log (x);



// let person = [{
//     name : "Afdal",
//     age : 17
// },
// {
//     name : "AfdAL",
//     age : 17
// }]
// function equal(nilai){
//     let tampung1 = []; 
//     // let karakter = ""
//     // console.log (nilai);
//     for (let i = 0; i< nilai.length; i++){
//         // console.log (nilai[i]);
//         // console.log (nilai[i].name);
//         tampung1.push(nilai[i].name);
//         console.log (tampung1);
//         console.log (tampung1[0]);
//         console.log (tampung1[1]);
//         if (tampung1[0] === tampung1[1]){
//             console.log ("Sama");
//         }else{
//             console.log ("Tidak Sama");
//         }
//     }
// };
// let a = equal(person)


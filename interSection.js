function interSection (arr1, arr2){
    let tampung = {};
    for (let key in arr1){
        console.log (key); // untuk mengetahui property
        console.log (arr1[key]); // untuk mengetahui value dalam property
    if(arr1[key] === (arr2[key])){
        // tampung.push(`${[key]} : ${arr1[key]}`);
        tampung[key] = arr1[key]; // artinya arr1[key] isinya masuk ke tampung[key] beserta property dan value
        // tampung[key] adalah menampung property dan value apabila terdapat dalam for in let
        }
    }
    return tampung;
};
let data1 = 
    {
        a : 1, // a adalah property, 1 adalah value
        b : 2
    };
let data2 = 
    {
        a : 1,
        c : 3
    }
// console.log (data1);
let c = interSection(data1,data2);
console.log(c);
// hash implementation object
let obj = {
    David : "001",
    Bayu : "002",
};
let obKey = Object.keys(obj);
let obValue = Object.values(obj);
// console.log(obKey);
// console.log(obValue)

// hash implementation map
let myMap = new Map();
myMap.set("David", "001");
myMap.set("Bechkam", "002");
console.log(myMap)
// map berbeda dengan object karena iterable => karena itu tidak bisa menggunakan for in
for (let [key, value] of myMap){ // syntax standar untuk hashMap
    console.log(`${key} :  ${value}`)
}

// function arrayWord (word){
//     let gabung = word.join(",");
//     return gabung;

    
// };
// let a = ["Banana", "Apple", "Manggo"]
// console.log (arrayWord(a));

function concat (word){
    let last = word[word.length - 1]; //banana di tampung di variable last
    word.pop();
    console.log (word);
    console.log (`${word.join(", ")}, and ${last}`);
};
let a = ["apple", "manggo", "pineapple", "banana"];
console.log (concat(a));
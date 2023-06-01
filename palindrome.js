/*
pseudocode
store palindorme in variable
create array of alphabet
split palindrome letter into array
filer palindrome array
    allow letter if letter is an alphabet
join palindrome array
*/

let palindrome = "race, car";
const arrAlpha = "abcdefghijklmnopqrstuvwxyz".split("");
console.log (arrAlpha);
palindrome = palindrome.split("");
palindrome = palindrome.filter((letter) => {
    return arrAlpha.includes(letter);
})
palindrome = palindrome.join("");
console.log (palindrome);
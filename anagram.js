function isAnagram(a,b){
    console.log (a)
    console.log (b)
    a = a.split("").sort().join("")
    b = b.split("").sort().join("")
    console.log (`Setelah di ubah => ${a}`);
    console.log (`Setelah di ubah => ${b}`);
    if (a.includes(b)){
        return "true";
    }
    return "false"
}
let s = "rat";
let t = "car";
// isAnagram(s,t)
console.log (isAnagram(s,t))
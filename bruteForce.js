// brute Force
// square 2 => 2 disitu mengganti n pangkat2 => jadi disebut square 2 karena ada 2 looping dldalamnya
function checDup(arr){
    for (let i = 0; i < arr.length; i++){
        for (let j = i+1; j < arr.length; j++){
            if (arr[i] === arr[j])
            return true;
        }
    }
    return false;
}
// console.log (checDup([1,2,3,1]));

// optimixe with extra memory
// linear karena hanya ada satu looping
function checDup2(arr){
    const uniqueData = new Set(); // extra memory karena memakai method Set()
    for (let i = 0; i < arr.length; i++){
        if (uniqueData.has(arr[i]))
        return true; 
        else
        uniqueData.add(arr[i]);
        console.log(uniqueData)
    }
    return false;
}
console.log (checDup2([1,2,3,1,1]))

// optimixe without extra memory
function checDup3(arr){
    arr.sort(); // ini method secara mengurutkan ascending => dari kecil ke bawah
    for (let i = 0; i < arr.length-1 ; i++){
        if (arr[i] === arr[i+1])
        return true;
    }
    return false; 
}
console.log (checDup3([5,1,3,1]))
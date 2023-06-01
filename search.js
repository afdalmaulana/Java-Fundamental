// linear
function search(arr, x){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === x)
        return i;
    }
    return -1;
}
console.log(search([2,20,10,3], 20))

// binary
function binarySearch(arr, low, r, x){
        if (r >= low){
            let mid = low + Math.floor((r - low)/2)
            // if the element is present at the middle it self
            if (arr[mid] === x) return mid;
            if (arr[mid] > x)
            return binarySearch(arr, low, mid - 1, x);
            return binarySearch(arr, mid + 1, r, x);
        }
        return -1;
}
let arr = [2,3,4,10,40]; // binary search hanya bisa digunakan apabila nilai terurut makanya apabila tidak terurut harus di urutkan
let x = 10;
console.log (binarySearch(arr,0,arr.length-1,x))
function tambah (nilai1, nilai2){
    let simpan = [];
    for (let i = 0; i < nilai1.length; i++){
        simpan.push(nilai1[i] + nilai2[i])
        // (nilai1[i] || 0) + (nilai2[i] || 0) apabila ada nilai pada array berjumlah 2
    }
    return simpan
};
let arr1 = [1,2,3,4];
let arr2 = [3,2,1];
let c = tambah(arr1,arr2);
console.log (c);

//4
let uang = 1000;
let rupiah = Intl.NumberFormat("id-ID", {
    style : "currency",
    currency : "IDR"
})
console.log (rupiah.format(uang).replace(/Rp/ig,"Rp."));
// let idr = uang.toLocaleString('id-ID', {style : "currency", currency :"IDR"});
// console.log (idr);
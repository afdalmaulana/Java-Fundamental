class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
let listProduct = [
    new Product ("Jas", 1000),
    new Product ("Kemeja", 2000),
    new Product ("Celana", 3000),
]

class Menampilkan{
    tampil(){
    let tampung = 0;
    listProduct.forEach((item) =>{
        tampung++
        console.log (`Barang yang tersedia : ${item.name}`)
        console.log (`Harga : ${item.price}`);
    });
    // for (let i = 0; i < listProduct.length; i++){
    //     tampung++
    //     console.log(`Barang yang tersedia : ${listProduct[i].name}`);
    //     console.log(`Harga : ${listProduct[i].price}`)
    // }
    return tampung;
    }
}
let menampilkan = new Menampilkan();
menampilkan.tampil(listProduct);

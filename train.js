/*
create class Train
in class Train create property gerbong dengan default array ["masinis"] dan maxSize  = 11
create method passenger masuk dengan tipe data string, nama harus unik tidak boleh duplikat 
create method passenger keluar, tapi masinis tidak boleh keluar
*/

class Train {
    constructor(gerbong = ["Masinis"]){
        this.gerbong = gerbong;
        this.maxSize = 11;
    }
    penumpangMasuk (nama){
        if (nama == "Masinis"){ // if if if adalah mengecek semua kondisi apabila true, sedangkan if else apabila ada kondisi yang terpenuhi maka di bawahnya akan di skip
            console.log ("Masinis tidak boleh jadi penumpang")
        } 
        if (this.gerbong.length > this.maxSize){
            console.log ("Kereta Penuh")
        }if (this.gerbong.includes(nama)){
            console.log (`${nama} Sudah ada di kereta`);
            return;
        }
        this.gerbong.push(nama);
        this.maxSize -= 1;
    }
    penumpangKeluar (){
        if (this.gerbong == "Masinis"){ // if(this.gerbong === 1)
            console.log ("Masinis tidak boleh turun");
            return;
        }
        this.gerbong.pop();
        this.maxSize += 1;
    }
    printAll(){
        return (`Isi dalam Gerbong => ${this.gerbong} . Gerbong yang kosong =>  ${this.maxSize}`);
        // console.log (`Daftar Penumpang ${this.gerbong.nama}`)

    }
}
let train = new Train();
console.log (train)
train.penumpangMasuk("Afdal");
train.penumpangMasuk("Felix");
train.penumpangMasuk("Lock");
// train.penumpangMasuk("Chow");
// train.penumpangMasuk("Heli");
// train.penumpangKeluar();
// train.penumpangKeluar();
// train.penumpangKeluar();
// train.penumpangKeluar();
console.log(train.printAll());
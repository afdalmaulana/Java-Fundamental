// // deklaration
// huruf awal class harus Kapital buat membedakan
class User1{
    greeting(){
        console.log ("Hello World");
    }
}
const user1 = new User1();
user1.greeting();

// expression
const User2 = class{
    greeting(){
        console.log("Hey");
    }
};
const user2 = new User2();
user2.greeting();

// constructor
class Human {
    // method() yang berfungsi untuk inisialisasi ketika pembuatan objek
    // untuk menyiapkan data untuk dalam class
    constructor(name, birth, gender){
        this.name = name,
        this.birth = birth,
        this.gender = gender
        // boleh juga seperti ini (this.name = name), (this.birth = birth)
    }
}
// const human = new Human();
// let newHuman = new Human("Afdal", "1998-07-26", "Male");
let newHuman = [
    new Human ("Felix", "2000-03-14", "Male"),
    new Human ("Afdal", "1998-07-26", "Male"),
    new Human ("Vaya", "2001-05-14", "Female"),

]
console.log (newHuman);

// access modifier
// apabila "#" adalah private tidak bisa sembarangan di akses
class Pengguna1 { // contoh private
    name; // ini adalah property
    #email;
    static age = 21;
    constructor (name,email){
        this.name = name,
        this.#email = email
    }
    findEmail(){ //private property dapat di akses menggunakan method yang kira buat
        return this.#email;
    }
}

const pengguna1 = new Pengguna1 ("Afdal", "heyafdal@gmail.com"); // instance of
// console.log (pengguna1.#email); 
// pengguna1.findEmail();
console.log ("========")
console.log (Pengguna1.age) // ini adalah static
// static tidak perlu memanggil instace of tapi nama class awal
console.log (pengguna1.findEmail()); // ini adalah contoh pemanggilan private

class Pengguna {
    name 
    email   
    constructor (name,email){
        this.name = name,
        this.email = email
    }
    findEmail(){
        return this.email;
    }
}

const pengguna = new Pengguna ("Afdal", "heyafdal@gmail.com");
console.log (pengguna.name);
// console.log (pengguna.email);
// console.log (pengguna.findEmail());

// static
class DB {
    static #connection = ""
    static #initializeConnection(){
        const randomNum = Math.ceil(Math.random() * 100);
        DB.#connection = `New Database Connection ${randomNum}`;
    }
    static findConnection(){
        if (!DB.#connection){
            DB.#initializeConnection();
        }
        return DB.#connection;
    }
}
console.log(DB.findConnection()); // ini memanggil nama class tidak perlu menambahkan instance of karena static

class Product {
    productName = "Lord of The rings";
    price = 200000;
    constructor(){
        // this.productName = productName,
        // this.price = price
    }
}
const product = new Product("Lord of The Rings", 200000);
console.log (product);

class Book extends Product{
    constructor(){
        super();
        this.author;
    }
    getAuthor(){
        return this.author;
    }
    setAuthor(authorName){
        this.author = authorName;
    }
}
const book = new Book();
book.setAuthor("Tolkien");
console.log(book);

// instance of operator
class Animal{}
class Rabbit extends Animal{}
class Tree{}
const rabbit = new Rabbit();
console.log(rabbit instanceof Animal);
console.log(rabbit instanceof Rabbit);
console.log(rabbit instanceof Tree);

// super keyword
class User {
    name 
    #code
    constructor (codePrefix = ""){
        const randomNumber = Math.round(Math.random() * 1000);
        this.#code = `${codePrefix}${randomNumber.toString().padStart(6, "0")}`
    }
    getCode(){
        return this.#code;
    }
}
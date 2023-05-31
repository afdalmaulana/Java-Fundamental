class Stack {
    #maxSize;
    #container = [];
    constructor(maxSize = 10){
        this.#maxSize = maxSize;
    }
    #isFull(){
        return this.#container.length >= this.#maxSize;
    }
    #isEmpty(){
        return this.#container.length === 0;
    }
    push(element){
        if(this.#isFull()){
            console.log("Sudah Penuh !");
            return;
        }
        this.#container.push(element);
    }
    pop(){
        if(this.#isEmpty()){
            console.log ("Masih Kosong !")
            return; //membatasi 
        }
        this.#container.pop();
    }
    getElement(){
        return this.#container;
    }
}
let stack = new Stack() // ini adalah instance of
stack.push(1);
stack.push(2);
// console.log (stack.getElement())
stack.pop();
stack.pop();
stack.pop();
console.log (stack.getElement())
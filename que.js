class Que{
    #container = [];
    #maxSize;
    constructor(maxSize = 5){
        this.#maxSize = maxSize;
    }
    #isFull(){
        return this.#container.length >= this.#maxSize;
    }
    #isEmpty(){
        return this.#container.length === 0;
    }
    enque(element){ // untuk menambahkan data
        if(this.#isFull()){
            console.log ("Antrian Penuh")
            return;
        }
        this.#container.push(element); 
    }
    deque(){ // untuk mengeluarkan data
        if(this.#isEmpty()){
            console.log ("Antrian Kosong")
            return;
        }
        return this.#container.shift();
    }
    getElement(){
        return this.#container;
    }
}
const que = new Que();
que.enque(1);
que.enque(2);
que.enque(3);
que.enque(4);
que.enque(5);
console.log (que.getElement());
que.deque();
que.deque();
que.enque(6);
que.enque(7);
que.deque();
que.deque();
que.deque();
que.deque();
que.deque();
que.deque();
console.log (que.getElement());
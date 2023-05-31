// cara 1
// literal
let student = {
    // name,age, batchClass di sebut property
    name : "afdal",
    age : 17,
    batchClass : "JCWD",
    greet(){ // <= function dalam object dikatakan method()
        return "Hello";
    },
    detailAddress : {
        cluster : "fauna",
        RT : 4,
        RW : 2,
    },
    lemari : ["baju", "celana", "jas"],
};
console.log (student.age);
console.log (student["age"]);
console.log (student.greet());
console.log (student.detailAddress.cluster);
console.log (student.lemari[2]);

// add properties to object
student.birthday = "1998-07-26";
console.log (student);

// delete properties of object
delete student.lemari;
console.log (student);

// optional chaining "?"
console.log (student.lemari?.lokasi);
// ? digunakan untuk mengetes apabila ada, <= safeway

// object destructuring --> nenecah data object menjadi variable
let {name, age, batchClass } = student;
console.log (name, age, batchClass);
name = "Maulana";
console.log (name);
console.log (student);


// destructuring pada array
// memecah elemen menjadi variable
let a1 = [1,2, "yes", true];
// console.log (a1);
let [c,d,e,f] = a1;
console.log (e);
// cara 2 desctructuring array
// let a3,b3 ;
// [a3,b3] = [10, 20];
// console.log (a3)

// access value dari object
let objValue = Object.values(student)
console.log (objValue);
// access key dari object
let objKeys = Object.keys(student);
console.log (objKeys);

// for in loop
// kondisinya mengikuti object yang sedang dilooping 
for (let key in student){ // key,item, value juga bisa
    console.log (key);
    console.log (student[key]);
}

// getter and setter
let manusia = {
    firstName : "Afdal", // firstName adalah property
    lastName : "Maulana",
    get fullName(){
        return `${this.firstName} ${this.lastName}` //this diganti dengan nama object juga bisa
    }, // this menunjuk ke objek
    set fullName(value){
        const splittedValue = value.split(" ")
        this.firstName = splittedValue[0];
        this.lastName = splittedValue[1];
    }
};
console.log (manusia);
console.log ("Before :", manusia.fullName)
manusia.fullName = "Maulana Afdal";
console.log ("After :", manusia.fullName)
// user.fullName = "Afdal Maulana"
// console.log (manusia.firstName);
// console.log (manusia.lastName);

// cara 2
// object constractor
let user = new Object()
user.name = "Afdal"
user.age = 17;
console.log (user);

// spread operator
// untuk array
const dataOne = [1,2,3];
const dataTwo = [4,5,6];
const finalData = [...dataOne, ...dataTwo];
console.log (finalData);

// untuk object
// hampir sama seperti concat
const objOne = {
    name : "Monalisa",
    age : "23",
};
const objTwo = {
    email : "heymonalisa@gmail.com",
    address : "jogja",
}
const finalObj = {...objOne, ...objTwo};
console.log (finalObj);
console.log (finalObj.email);


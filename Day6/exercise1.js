// function calculate(){

// }

// class Student{
//     constructor(nama, email, age, score){
//         this.nama = nama;
//         this.email = email;
//         this.age = age;
//         this.score = score;
//     }
//     getNilai(){
//         if (this.score >= 85){
//             return "Highest"
//         } else if(this.score <= 85);
//             return "Lowest"
//     }
// }
// const student = [
//     {nama: "Afdal", email: "afdal@gmail.com", age: 23, score: 90},
//     {nama: "Alice", email: "alice@gmail.com", age: 24, score: 80}
// ]
// console.log (student);


const studentdData = [
    { Name: "Afdal", Email: "afdal@piur.com", Age: 24, Score: 92 },
    { Name: "Riza", Email: "iza@piur.com", Age: 25, Score: 84 },
    { Name: "Yesi", Email: "yesi@piur.com", Age: 23, Score: 88 },
  ];
  
  let scoreAge = (siswa) => {
    let highestByScore = [];
    let highestByAge = [];
    let lowestByScore = [];
    let lowestByAge = [];
    let resultScore = new Object();
    let resultAge = new Object();
    highestByScore = siswa.sort((a, b) => b.Score - a.Score);
    resultScore.highest = highestByScore[0].Score;
    //   console.log(highestByScore[0].Score);
    lowestByScore = siswa.sort((a, b) => a.Score - b.Score);
    resultScore.lowest = lowestByScore[0].Score;
    //   console.log(lowestByScore[0].Score);
    let avgScore =
      siswa.reduce((total, next) => total + next.Score, 0) / siswa.length;
    resultScore.average = avgScore;
    //   console.log(avgScore);
  
    highestByAge = siswa.sort((a, b) => b.Age - a.Age);
    resultAge.highest = highestByAge[0].Age;
    //   console.log(highestByAge[0].Age);
    lowestByAge = siswa.sort((a, b) => a.Age - b.Age);
    resultAge.lowest = lowestByAge[0].Age;
    //   console.log(lowestByAge[0].Age);
    let avgAge =
      siswa.reduce((total, next) => total + next.Age, 0) / siswa.length;
    resultAge.average = avgAge;
    //   console.log(avgAge);
  
    return [resultScore, resultAge];
  };
  
  console.log(scoreAge(studentdData));
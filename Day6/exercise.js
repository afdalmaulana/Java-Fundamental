let arrStudents = [ // ini adalah array of object bukan termasuk class dan function
    { // mulai dari name fiki sampai mike adalah contoh penulisan array of object
      name: "Fiki", // name adalah property dari class arrStudent
      email: "fiki@gmail.com",
      age: 21,
      score: 90,
    },
    {
      name: "Mike",
      email: "mike@gmail.com",
      age: 23,
      score: 80,
    },
  ];
  
  const findLowHighAverage = (arr) => { // ini adalah function
    let ageAll = [];
    let scoreAll = [];
    for (let i = 0; i < arr.length; i++) { // dibuatkan pengulangan untuk menampung age pada value array of object let arrStudent
        console.log (arr.length);
      ageAll.push(arr[i].age);
      console.log (ageAll);
    }
  
    for (let j = 0; j < arr.length; j++) { // pengulangan untuk menampung score pada value array of object let arrStudent
      scoreAll.push(arr[j].score);
      console.log (scoreAll);
    }
  
    let minAge = Math.min(...ageAll); // untuk mengetahui nilai min pada ageAll (...ageAll) <= adalah untuk menampung semua yang ada di ageAll
    let maxAge = Math.max(...ageAll); // untuk mengetahui nilai max pada ageAll
    let minScore = Math.min(...scoreAll); //untuk mengetahui nilai min pada scoreAll
    let maxScore = Math.max(...scoreAll); // untuk mengetahui nilai max pada scoreAll
    let avgAge = ageAll.reduce((a, b) => a + b) / arr.length; //reduce adalah menjumlahkan nilai sebelum dan nilai saat ini dan => kemudian dibagi dengan (/ arr.length)
    console.log (avgAge);
    let avgScore = scoreAll.reduce((x, y) => x + y) / arr.length;
  
    let obj = {
      age: {
        highest: maxAge,
        lowest: minAge,
        average: avgAge,
      },
      score: {
        highest: maxScore,
        lowest: minScore,
        average: avgScore,
      },
    };
    return obj;
  };
  
  let b = findLowHighAverage(arrStudents);
  console.log(b);
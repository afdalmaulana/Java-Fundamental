const findDifference = (arr1, arr2) => {
    let difference = [];
    for (let i = 0; i < arr1.length; i++) {
      if (!arr1.includes(arr2[i])) { //includes adalah mengecek apakah value dari arr1 terdapat di dalam arr2, sedangkan dengan tambahan tanda seru (!) => maka mengecek value arr2 dan tidak ada pada value arr1 
        difference.push(arr2[i]);
        console.log (difference);
      }
    }
    for (let j = 0; j < arr2.length; j++) {
      if (!arr2.includes(arr1[j])) { // dengan simbol(!) mengecek dan membandingkan apa yang tidak ada pada arr2
        difference.push(arr1[j]); // includes bisa digunakan untuk mencari duplicate
      }
    }
    return difference;
  };
  let a = ["hello", "world"];
  let b = ["hello", "there"];
  let c = findDifference(a, b);
  console.log(c);
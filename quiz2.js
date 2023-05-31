function leapYear(tahun){
    console.log (tahun);
        // Leap years are divisible by 4
        if (year % 4 !== 0) {
          return false;
        }
      
        // Leap years are either divisible by 400 or not divisible by 100
        if (year % 100 === 0 && year % 400 !== 0) {
          return 0;
        }
      
        return 1;
      
      // Example usage      
    // jika tahun %400 == 0 => kabisat
    // jika tahun %400 !== 0 && tahun % 100 == 0 => bukan kabisat
    // jika tahun %400 !== 0 && tahun % 100 !== 0 tapi jika tahun % 4 == 0 => maka kabisat
    // jika % 100  $ 4 == 0 ini
    // if (year % 4 === 0){
    //     return 0;
    // }
    // return 1;
};
let year = 2000;
console.log (leapYear(year));
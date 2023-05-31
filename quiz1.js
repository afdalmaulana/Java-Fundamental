// function getFloor(floor){
//     let a = Math.floor(floor/3);
//     console.log (a);
//     let b = floor%3;
//     console.log (b);
//     return [floor,a * 18 + (b == 1 ? 5 : b == 2 ? 11 : 0)]
// }
// let nilai = 5;
// console.log (getFloor(nilai));

// cara 2
function getLockerFloor(floor) {
    let start = 0;
    let end = 0;
    for (let i = 1; i < floor + 1; i++) {
        if (i % 3 === 1) {
            start = end + 1; 
            end = start + 4; // 5 karena dalam 1 lantai ada 5 room (1,2,3,4,5)
          } else if (i % 3 === 2) {
              start = end + 1;
              end = start + 5; // lt.2 => 6 room(6,7,8,9,10,11)
          } else if (i % 3 === 0) {
              start = end + 1;
              end = start + 6; // lt 3 => 7 room(12,13,14,15,16,17,18)
          }
          console.log(start, end, i) // cek nilai
          // let modulus = 1 % 3 // cek hasil modulus
          // console.log(modulus);
      }
      return [floor, end];
  }
  const lantai = 4;
  console.log(getLockerFloor(lantai));
  
  
//   let modulus = 4 % 3 // cek hasil modulus
//   console.log(modulus);

  // cara 3
  /* 
  1st floor => locker =  1,2,3,4,5
  2nd floor => loc 6,7,8,9,10,11
  3rd floor = 12,13,14,15,16,17,18
  4th floor = 19,20,21,22,23
  5th floor = 24,25,26,27,28,29
  */
  function getFloor(floor){
    let firstFloor = 1;
    let resultFloor = 0;
    let jumlahlocker = 5;
    let kalkulasi = 1;
    while (firstFloor <= floor){
      resultFloor += jumlahlocker;
      jumlahlocker++;
      if(kalkulasi === 3){
        kalkulasi = 0;
        jumlahlocker = 5;
      }
      kalkulasi++;
      firstFloor++;
    }
    console.log([floor,resultFloor]);
  }
  let lantai1 = 3;
getFloor(lantai1);

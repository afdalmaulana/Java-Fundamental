// function findFloor(room){
//     let firstRoom = 1;
//     let result = 0;
//     let jumlahRoom = 5;
//     let counter = 1;

// }
// let r = 6;
// console.log (findFloor(r))

function findFloor(roomNumber) {
    let floor = 1;
    let ruanganSetiapLantai = 5;
    let counter = 1;
    if (roomNumber<=5){
        return floor;
    }
    while (roomNumber > ruanganSetiapLantai) { // 18 > 5 //13>5 //7>5 0>5
      roomNumber -= ruanganSetiapLantai; // 18 - 5 -> 13 //13-6 = 7 //7-7=0
      ruanganSetiapLantai++; // 6 //7 //5
      floor++; //2 //3 //4
      if (counter === 3){
        ruanganSetiapLantai = 5;
        counter = 0;
      }
      counter++ //2 //1 //2
    }
  
    return [floor];
  }
const floorNumber = findFloor(120);
console.log(floorNumber); // Output: [8]
// function findFloor(roomNumber) {
//     let floor = Math.ceil(roomNumber / 5);
//     if (floor <= 2){
//         return floor;
//     }else{
//     return floor - 1;
//     }
// }


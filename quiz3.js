function isPrime (num1, num2){
const numPrime = [];

for (let i = num1; i <= num2; i++) {
    console.log (i);
  let isPrime = true;

  // Cek Prima atau bukan
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime && i > 1) {
    numPrime.push(i);
  }
}

return numPrime;
}
let a = 1;
let b = 10;
console.log(isPrime(a,b))
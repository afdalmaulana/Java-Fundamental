function isLeapYear(year) {
    // Leap years are divisible by 4
    if (year % 4 !== 0) {
      return false;
    }
  
    // Leap years are either divisible by 400 or not divisible by 100
    if (year % 100 === 0 && year % 400 !== 0) {
      return false;
    }
  
    return true;
  }
  
  // Example usage
  const year = 2020;
  const isLeap = isLeapYear(year);
  console.log(isLeap); // Output: true
  
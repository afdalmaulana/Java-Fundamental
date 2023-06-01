function climbStairs(n) {
    if (n == 0) return 1;
    else if (n < 0) return 0;
    else return climbStairs(n - 2) + climbStairs(n - 1);
  // climbstairs(1) + climbstairs(2)
  // [climbstairs(-1) + climbstairs(0)] + climbstairs(2)
  // 0 + 1 + climbstairs(2)
  // 0 + 1 + [(climbstairs(0)) + (climbstairs(1))]
  // 0 + 1 + 1 + (climbstairs(-1) + climbstairs(0))]
  // 0 + 1 + 1 + 0 + 1
  // 3
  
  }
  
  console.log(climbStairs(3));
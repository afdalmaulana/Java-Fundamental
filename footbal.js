function football(matchs, points){
    // win = 3 point
    // lose = 0 point
    // draw = 1 point
    /**
     * 10 macth = 25 point
     * 8 win = 3 * 8 = 24 point
     * 1 lose = 0
     * 1 draw = 1
     * 
     * => 20 = 60 point
     * 20 win = 3 * 20 = 60 point
     * lose = 0
     * draw = 0
     * 
     * => 11 = 25 points
     * 8 win = 3 * 8 = 24 point
     * 2 lose = 0
     * 1 draw = 1 point
     * yang mau di cek adalah berapa kali win, lose, draw
     */
    // let macth = arr[0];
    // let numPoints = arr[1];
    let win = Math.floor(points / 3);
    let draw = Math.floor((points % 3) / 1);
    let lose = matchs - win - draw;
    return [win, draw, lose];
  
  // Example usage

};
let match = 10;
let point = 25
console.log(football(match, point));
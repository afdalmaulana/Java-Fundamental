function convertText(number){
    let data = number.replace(/[1-26]/g,"abcdefghijklmnopqrstuvwxyz")
    console.log(data);
}
let x = [16,21,18,23,1,4,8,9,11,1]
convertText(x);
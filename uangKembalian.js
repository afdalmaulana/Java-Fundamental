function convertToBanknotes(num) {
    const fractions = [100000, 75000, 50000, 20000, 10000, 5000, 2000];
    const banknotes = [];
    console.log (num);
    let remaining = num;
  
    fractions.forEach(fraction => {
      if (remaining >= fraction) {
        const hasil = Math.floor(remaining / fraction);
        console.log (hasil);
        remaining -= fraction;
        banknotes.push([fraction]);
      }
    });
  
    return banknotes;
  };
  let x = 74000;
  console.log(convertToBanknotes(x));
  

  function uangKembalian(uang){
    const pecahan = [100000, 50000, 20000, 10000, 5000, 2000]

    
};
let a = 74000;
uangKembalian(a);
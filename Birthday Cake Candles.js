function birthdayCakeCandles(candles = []) {
   const maxNum = Math.max(...candles);
   return candles.reduce((acc, num) => {
      num === maxNum && acc++;
      return acc;
   }, 0)
}


// console.log(birthdayCakeCandles([3, 2, 1, 3]));

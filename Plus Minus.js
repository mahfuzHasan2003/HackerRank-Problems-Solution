function plusMinus(arr) {
   const groupedNum = arr.reduce((acc, num) => {
      (num > 0 ? acc.positive : num < 0 ? acc.negative : acc.zero).push(num)
      return acc;
   }, { positive: [], negative: [], zero: [] })

   for (let i in groupedNum) {
      console.log((groupedNum[i].length / arr.length).toFixed(6));
   }

}


plusMinus([-4, 3, -9, 0, 4, 1]);

function getTotalX(a, b) {
   let count = 0;
   const acceptableNumbers = [];
   for (let i = Math.min(...a); i <= Math.min(...b); i++) {
      let isAcceptable = true;
      for (let j = 0; j < a.length; j++) {
         if (i % a[j] !== 0) {
            isAcceptable = false;
            break;
         }
      }
      isAcceptable && acceptableNumbers.push(i);
   }

   for (let k of acceptableNumbers) {
      let isAcceptable = true;
      for (let j = 0; j < b.length; j++) {
         if (b[j] % k !== 0) {
            isAcceptable = false;
            break;
         }
      }
      isAcceptable && count++;
   }

   return count;
}

// console.log(getTotalX([2, 4], [16, 32, 96]));
// console.log(getTotalX([2, 6], [24, 36]));

function compareTriplets(a, b) {
   const result = [0, 0];
   for (let i = 0; i < 3; i++) {
      a[i] > b[i] && (result[0] += 1);
      a[i] < b[i] && (result[1] += 1);
   }
   return result;
}


// console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
// console.log(compareTriplets([5, 6, 7], [3, 6, 10]));

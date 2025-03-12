function miniMaxSum(arr) {
   const maxNum = Math.max(...arr);
   const minNum = Math.min(...arr);
   const totalSum = arr.reduce((acc, num) => acc + num);
   console.log(totalSum - maxNum, totalSum - minNum);
}


// miniMaxSum([1, 3, 5, 7, 9])
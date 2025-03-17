function countApplesAndOranges(s, t, a, b, apples = [], oranges = []) {
   console.log(apples.filter((pos) => pos + a >= s && pos + a <= t).length);
   console.log(oranges.filter((pos) => pos + b >= s && pos + b <= t).length);
}
// countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])
function solution(nums, N) {
  let sum = nums.reduce((a, b) => a + b, 0);
  let max = sum / N;
  let min = 1;
  let count, half;

  while (max > min) {
    half = Math.trunc((max + min) / 2);
    countLines = 0;
    for (num of nums) {
      countLines += Math.trunc(num / half);
    }
    if (countLines >= N) {
      min = half + 1;
    } else if (countLines < N) {
      max = half - 1;
    }
  }
  return max;
}
let nums = [802, 743, 457, 539];
let N = 11;
let output = solution(nums, 11);
console.log(output);

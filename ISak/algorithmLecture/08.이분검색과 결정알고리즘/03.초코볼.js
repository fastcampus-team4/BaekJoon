function solution(nums, H) {
  let max = nums.reduce((a, b) => a + b, 0);
  let min = 1;
  let half, hour;
  while (min < max) {
    half = Math.ceil((max + min) / 2);
    hours = 0;
    for (num of nums) {
      hours += Math.ceil(num / half);
    }
    if (hours > H) {
      min = half + 1;
    } else if (hours <= H) {
      max = half - 1;
    }
  }

  return min;
}
let nums = [29, 12, 24, 5, 19];
let H = 6;
let output = solution(nums, H);
console.log(output);

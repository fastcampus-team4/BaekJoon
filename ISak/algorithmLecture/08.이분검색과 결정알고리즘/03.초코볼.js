function solution(nums, H) {
  let max = nums.reduce((a, b) => a + b, 0);
  let min = 1;
  let half;
  while (min < max) {
    half = Math.ceil((max + min) / 2);
    hours = 0;
    for (num of nums) {
      hours += Math.ceil(num / half);
    }
    if (hours > H) {
      min = half + 1;
    } else{
      max = half - 1;
    }
  }

  return min;
}
let nums = [12,24,15,7,9]
let H = 8;
let output = solution(nums, H);
console.log(output);

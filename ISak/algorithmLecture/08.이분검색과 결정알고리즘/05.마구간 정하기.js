function solution(nums, C) {
  nums.sort((a, b) => a - b);
  nums;
  let horses = C - 2;

  let max = nums[nums.length - 1] - nums[0];
  let min = 1;
  // while(min<max){}
  let half = Math.floor((max + min) / 2);

  half;

  let ans;
  return nums;
}
let nums = [1, 2, 8, 4, 9];
let C = 3;
let output = solution(nums, C);
console.log(output);

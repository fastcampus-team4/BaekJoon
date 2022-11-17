function solution(nums) {
  let temp;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }

  return nums;
}
let nums = [7, 6, 10, 9, 8];
let output = solution(nums);
console.log(output);

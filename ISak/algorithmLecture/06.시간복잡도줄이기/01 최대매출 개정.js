function solution(nums, k) {
  const end = nums.length - 1;
  let sum = nums.slice(0, k).reduce((a, b) => a + b, 0);
  let maximum = sum;
  let left = 0;
  for (let right = k; right <= end; right++) {
    sum += nums[right] - nums[left];
    maximum = Math.max(maximum, sum);
    left++;
  }
  return maximum;
}
let nums = [1, 2, 3, 5, 6, 7, 1, 3, 9];
let k = 5;
let output = solution(nums, k);
console.log(output);

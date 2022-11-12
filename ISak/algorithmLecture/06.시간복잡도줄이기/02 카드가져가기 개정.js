function solution(nums, k) {
  let sum = nums.slice(0, k).reduce((a, b) => a + b, 0);
  let answer = sum;
  let right = nums.length;
  for (let left = k - 1; left >= 0; left--) {
    right--;
    sum += nums[right] - nums[left];
    answer = Math.max(answer, sum);
  }

  return answer;
}
let nums = [2, 3, 7, 1, 2, 1, 5];
let k = 4;
let output = solution(nums, k);
console.log(output);

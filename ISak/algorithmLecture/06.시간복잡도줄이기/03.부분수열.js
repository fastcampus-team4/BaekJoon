function solution(nums, m) {
  let count = 0;
  let sum = 0;
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum > m && left <= right) {
      sum -= nums[left];
      left++;
    }
    if (sum === m) {
      count++;
    }
  }

  return count;
}
let nums = [5, 5, 5];
let m = 5;
let output = solution(nums, m);
console.log(output);

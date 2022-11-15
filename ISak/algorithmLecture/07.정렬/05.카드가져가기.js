function solution(nums, k) {
  const n = nums.length / 2;
  let result = 0;
  const diffArray = [];
  nums.sort((a, b) => b - a);
  for (let i = 0; i < n; i++) {
    let diff = nums[2 * i] - nums[2 * i + 1];
    result += nums[2 * i + 1];
    diffArray.push(diff);
  }
  diffArray.sort((a, b) => b - a);
  result += diffArray.slice(0, k).reduce((acc, cur) => acc + cur, 0);
  return result;
}
let nums = [8, 2, 12, 12, 12, 12, 2, 2];
let k = 2;
let output = solution(nums, k);
console.log(output);

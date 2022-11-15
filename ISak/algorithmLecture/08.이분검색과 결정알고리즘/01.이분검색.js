function recur(nums, l, r, M) {
  let half = Math.trunc((r + l) / 2);

  if (nums[half] === M) return half;
  if (nums[half] < M) {
    return recur(nums, half + 1, r, M);
  } else if (nums[half] > M) {
    return recur(nums, l, half - 1, M);
  }
}
function solution(nums, M) {
  nums.sort((a, b) => a - b);
  return recur(nums, 0, nums.length - 1, M) + 1;
}
let nums = [23, 87, 65, 12, 57, 32, 99, 81];
let M = 99;
let output = solution(nums, M);
console.log(output);

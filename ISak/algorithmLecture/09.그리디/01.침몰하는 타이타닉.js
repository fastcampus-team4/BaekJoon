function solution(nums, m) {
  const N = nums.length; //?
  let ans = 0;
  let l = 0;
  let r = N - 1;
  nums.sort((a, b) => a - b);
  while (l <= r) {
    if (nums[r] + nums[l] <= m) l++;
    r--;
    ans++;
  }
  return ans;
}
let nums = [
  68, 72, 30, 105, 55, 115, 36, 67, 119, 111, 95, 24, 25, 80, 55, 85, 75, 83,
  21, 81,
];
let m = 120;
let output = solution(nums, m);
console.log(output);

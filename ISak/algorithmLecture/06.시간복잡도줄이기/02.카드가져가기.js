function sumOf(...arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}
function solution(nums, k) {
  let left = k;
  let right = nums.length;
  let max = 0;

  while (left > -1) {
    let sum = sumOf(...nums.slice(0, left), ...nums.slice(right));
    if (sum > max) max = sum;
    left--;
    right--;
  }
  return max;
}
let nums = [1, 2, 3, 5, 6, 7, 1, 3, 9];
let k = 5;
let output = solution(nums, k);
console.log(output);

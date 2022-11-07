function sumFtn(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}
function solution(nums, k) {
  max = 0;
  for (let i = 0; i <= nums.length - k; i++) {
    let sum = sumFtn(nums.slice(i, i + k));
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
let nums = [12, 34, 56, 72, 93, 121, 33, 11, 23, 52];
let k = 4;
let output = solution(nums, k);
console.log(output);

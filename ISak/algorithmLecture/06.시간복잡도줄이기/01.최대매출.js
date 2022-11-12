function sumOf(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0); // 시간복잡도 망함
}
function solution(nums, k) {
  max = 0;
  for (let i = 0; i <= nums.length - k; i++) {
    let sum = sumOf(nums.slice(i, i + k));
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
let nums = [1, 2, 3, 5, 6, 7, 1, 3, 9];
let k = 5;
let output = solution(nums, k);
console.log(output);

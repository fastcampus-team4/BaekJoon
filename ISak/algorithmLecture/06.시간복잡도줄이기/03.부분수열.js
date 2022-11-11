function solution(nums, m) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum === m) {
        count++;
        break;
      } else if (sum > m) {
        break;
      }
    }
  }

  return count;
}
let nums = [5, 5, 5];
let m = 5;
let output = solution(nums, m);
console.log(output);

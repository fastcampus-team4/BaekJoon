function solution(nums, m) {
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    let money = m;
    for (let j = i; j < nums.length; j++) {
      money -= nums[j];

      if (money < 0) break;
      if (max < j - i) {
        max = j - i;
      }
    }
  }
  return max + 1;
}
let nums = [100, 50, 120, 50, 150, 0, 50, 60];
let m = 400;
let output = solution(nums, m);
console.log(output);

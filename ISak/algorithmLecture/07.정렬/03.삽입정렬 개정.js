function solution(nums) {
  let j;
  let temp;
  for (let i = 1; i < nums.length; i++) {
    temp = nums[i];
    for (j = i - 1; j >= 0; j--) {
      if (nums[j] > temp) {
        nums[j + 1] = nums[j];
      } else {
        break;
      }
    }
    nums[j + 1] = temp;
  }
  return nums;
}
let nums = [2, 8, 3, 6, 1, 7, 5, 9];

let output = solution(nums);
console.log(output);

function solution(nums) {
  let tempArr;
  for (let i = 1; i < nums.length; i++) {
    tempArr = nums.slice(0, i);
    for (let j = 0; j < tempArr.length; j++) {
      if (nums[i] < tempArr[j]) {
        nums.splice(j, i - j + 1, nums[i], ...tempArr.slice(j));
        break;
      }
    }
  }

  return nums;
}
let nums = [7, 6, 10, 9, 8];
let output = solution(nums);
console.log(output);

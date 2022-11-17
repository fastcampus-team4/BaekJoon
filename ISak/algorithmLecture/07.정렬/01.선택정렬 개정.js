function solution(nums) {
  const n = nums.length;
  let minIndex;
  for (let i = 0; i < n; i++) {
    minIndex = i;
    for (let j = i; j < n; j++) {
      if (nums[minIndex] > nums[j]) minIndex = j;
    }
    if (minIndex !== i) {
      [nums[minIndex], nums[i]] = [nums[i], nums[minIndex]];
    }
  }

  return nums;
}
let nums = [2, 8, 3, 6, 1, 7, 5, 9];
let output = solution(nums);
console.log(output);

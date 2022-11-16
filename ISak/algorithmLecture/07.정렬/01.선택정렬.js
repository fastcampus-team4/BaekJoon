function solution(nums) {
  const n = nums.length;
  let min, minIndex, temp;
  for (let i = 0; i < n; i++) {
    min = Number.MAX_SAFE_INTEGER;
    for (let j = i; j < n; j++) {
      if (min > nums[j]) {
        min = nums[j];
        minIndex = j;
      }
    }
    temp = nums[minIndex];
    nums[minIndex] = nums[i];
    nums[i] = temp;
  }

  return nums;
}
let nums = [7, 6, 10, 9, 8];
let output = solution(nums);
console.log(output);

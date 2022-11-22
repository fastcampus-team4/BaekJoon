function solution(nums) {
  nums.sort((a, b) => {
    let A = a.toString(2).replaceAll("0", "").length;
    let B = b.toString(2).replaceAll("0", "").length;
    if (A === B) return a - b;
    else return A - B;
  });
  return nums;
}
let nums = [5, 4, 3, 2, 1];
let output = solution(nums);
console.log(output);

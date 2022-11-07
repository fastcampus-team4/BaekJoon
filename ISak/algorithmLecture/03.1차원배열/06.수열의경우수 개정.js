function solution(nums) {
  let peaks = [];
  let answer = 0;
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i - 1] < nums[i] && nums[i] > nums[i + 1]) {
      peaks.push(i);
    }
  }
  for (let p of peaks) {
    let point = p;
    let leftLength = 0;
    let rightLength = 0;
    while (nums[point - 1] < nums[point]) {
      point--;
      leftLength++;
    }
    point = p;
    while (nums[point] > nums[point + 1]) {
      point++;
      rightLength++;
    }

    answer += leftLength * rightLength;
  }
  return answer;
}
// let input = [1, 3, 2, 5, 7, 4, 2, 5, 1];
// let input =[1, 2, 3, 4, 5, 3, 2, 1]
let input = [1, 1, 3, 1, 2, 1, 3, 5, 6, 7, 2, 1];

console.log(solution(input));

function solution(input) {
  let ans = new Array(input.length).fill(0);
  let min, minIndex, temp;
  for (let i = 0; i < input.length; i++) {
    min = Number.MAX_SAFE_INTEGER;
    for (let j = i; j < input.length; j++) {
      if (min > input[j]) {
        min = input[j];
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      temp = input[minIndex];
      input[minIndex] = input[i];
      input[i] = temp;

      ans[i]++;
      ans[minIndex]++;
    }
  }
  return ans;
}
let input = [5, 4, 2, 1, 3];
let output = solution(input);
console.log(output);

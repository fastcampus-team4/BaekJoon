function solution(input) {
  let changeCount = 0;
  if (input[1] - input[0] <= 0) return "NO";

  let prevDiff = input[1] - input[0];
  let currDiff;
  for (let i = 1; i < input.length - 1; i++) {
    currDiff = input[i + 1] - input[i];
    if (currDiff === 0) return "NO";

    if (prevDiff * currDiff < 0) {
      //부호가 바뀔 때
      changeCount++;
    }
    prevDiff = currDiff;
  }
  return changeCount === 1 ? "YES" : "NO";
}
// let input = [1, 2, 3, 2, 1];
let input = [1, 2, 3, 2, 5, 3, 1];
let output = solution(input);
console.log(output);

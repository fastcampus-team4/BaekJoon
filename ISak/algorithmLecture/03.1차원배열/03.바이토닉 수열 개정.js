function isBitonic(input) {
  let extremePts = [];
  let prevDiff = input[1] - input[0];
  let currDiff;
  if (prevDiff === 0) return false;
  for (let i = 1; i < input.length - 1; i++) {
    currDiff = input[i + 1] - input[i];
    if (currDiff === 0) return false;
    if (prevDiff * currDiff < 0) {
      //부호가 바뀔때
      if (currDiff > 0) {
        return false; // loc.min
      } else {
        extremePts.push(i); // loc.max
      }
    }
    prevDiff = currDiff;
  }
  return extremePts.length === 1;
}

function solution(input) {
  return isBitonic(input) ? "YES" : "NO";
}

let input = [1, 2, 3, 4, 5];
let output = solution(input);
console.log(output);

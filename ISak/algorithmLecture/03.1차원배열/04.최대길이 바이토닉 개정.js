function findAns(input, peakPts) {
  let maxLength = 0;
  let leftLength, rightLength, next, prev;
  for (pt of peakPts) {
    prev = pt;
    for (next = pt - 1; next >= 0; next--) {
      if (input[next] >= input[prev]) break;
      prev = next;
    }
    leftLength = pt - prev;
    prev = pt;
    for (next = pt + 1; next < input.length; next++) {
      if (input[next] >= input[prev]) break;
      prev = next;
    }
    rightLength = prev - pt;
    if (maxLength < leftLength + rightLength) {
      maxLength = leftLength + rightLength;
    }
  }
  return maxLength + 1;
}

function solution(input) {
  let peakPts = [];
  let prevDiff = input[1] - input[0];
  let currDiff;
  for (let i = 1; i < input.length - 1; i++) {
    currDiff = input[i + 1] - input[i];
    if (prevDiff * currDiff < 0 && currDiff < 0) {
      peakPts.push(i);
    }
    prevDiff = currDiff;
  }
  return findAns(input, peakPts);
}
//              *--p--*--p--*-----------p-----*
// let input = [1, 1, 3, 1, 2, 1, 3, 5, 6, 7, 2, 1];
// input = [1, 2, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1];
input = [1, 2, 1];
// input = [1,2,3,2,1]
// input = [1, 2, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1];
// input = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1];
let output = solution(input);
console.log(output);

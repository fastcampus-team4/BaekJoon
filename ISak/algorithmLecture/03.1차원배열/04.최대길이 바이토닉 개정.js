function findAns(input, peakPts) {
  let maxLength = 0;
  let leftLength, rightLength, nextPt, prevPt;
  for (pt of peakPts) {
    prevPt = pt;
    for (nextPt = pt - 1; nextPt >= 0; nextPt--) {
      if (input[nextPt] >= input[prevPt]) break;
      prevPt = nextPt;
    }
    leftLength = pt - prevPt; // 왼쪽 길이
    prevPt = pt;
    for (nextPt = pt + 1; nextPt < input.length; nextPt++) {
      if (input[nextPt] >= input[prevPt]) break;
      prevPt = nextPt;
    }
    rightLength = prevPt - pt; // 오른쪽 길이

    if (maxLength < leftLength + rightLength) {
      maxLength = leftLength + rightLength; //최대길이 갱신
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
      peakPts.push(i); // peak에 해당하는 index 수집
    }
    prevDiff = currDiff;
  }
  return findAns(input, peakPts);
}
//              *--p--*--p--*-----------p-----*
let input = [1, 1, 3, 1, 2, 1, 3, 5, 6, 7, 2, 1];
let output = solution(input);
console.log(output);

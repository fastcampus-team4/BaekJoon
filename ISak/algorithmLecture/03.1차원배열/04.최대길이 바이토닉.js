function findAns(extremePts) {
  let maxLength; // index2까지 1-3-2
  extremePts = extremePts.filter((el, i) => i % 2 === 1);
  maxLength = extremePts[0]; // 시작~첫번째 바이토닉
  for (let i = 0; i < extremePts.length - 1; i++) {
    if (extremePts[i + 1] - extremePts[i] > maxLength) {
      maxLength = extremePts[i + 1] - extremePts[i];
    }
  }
  return maxLength + 1;
}

function solution(input) {
  //const atStartUp = 1;//시작 증감여부
  let extremePts = [];

  let prevDiff = input[1] - input[0];
  let currDiff;
  for (let i = 1; i < input.length - 1; i++) {
    currDiff = input[i + 1] - input[i];
    if (prevDiff * currDiff < 0) extremePts.push(i);

    prevDiff = currDiff;
  }
  extremePts.push(input.length - 1);
  console.log(extremePts);
  return findAns(extremePts);
}
let input = [1, 2, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1];
// input = [1, 2 ,3, 4, 5, 2, 1]
// input = [1, 3, 2, 5, 7, 4, 2, 5, 1]
// input = [1, 2, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1];
// input = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1];
let output = solution(input);
console.log(output);

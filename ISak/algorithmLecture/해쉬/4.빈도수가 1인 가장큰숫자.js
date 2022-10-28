function findAns(myArr, index) {
  while (index > 0) {
    if (myArr[index] === 1) {
      return index;
    }
    index--;
  }
  return -1;
}
function solution(input) {
  let myArr = new Array(1001).fill(0);
  let maxInd = -1;
  for (x of input) {
    myArr[x] += 1;
    if (myArr[x] === 1 && maxInd < x) maxInd = x;
  }
  return findAns(myArr, maxInd);
}
let input = [1, 1, 2, 2, 3, 3, 10];
let output = solution(input);
console.log(output);

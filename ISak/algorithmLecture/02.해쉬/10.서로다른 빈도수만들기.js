let RESULT = 0;

function count(arr, x) {
  const cnt = arr.reduce((acc, cur) => {
    return cur === x ? acc + 1 : acc;
  }, 0);
  return cnt;
}

function removeChar(i, myArr) {
  let lis = [...myArr.slice(0, i), ...myArr.slice(i + 1)];
  while (count(lis, myArr[i]) > 0 && myArr[i] > 0) {
    myArr[i] = myArr[i] - 1;
    RESULT++;
  }
}
function solution(input) {
  let myMap = new Map();

  for (x of input) {
    myMap.set(x, (myMap.get(x) || 0) + 1);
  }
  let myArr = [...myMap.values()].sort((a, b) => b - a); // values를 배열로 만들고 정렬
  for (let i = 0; i < myArr.length; i++) {
    removeChar(i, myArr);
  }
  // console.log(myArr, RESULT);
  return RESULT;
}

let input = "aaabbbccc";
let output = solution(input);
console.log(output);

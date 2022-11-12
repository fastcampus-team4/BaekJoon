function solution(input) {
  let sticks = input.replaceAll("()", "*"); // 레이저 : *
  let stack = [];
  let sum = 0;
  for (let i = 0; i < sticks.length; i++) {
    if (sticks[i] === "*") {
      sum += stack.length;
    } else if (sticks[i] === "(") {
      stack.push("(");
    } else {
      stack.pop();
      sum += 1; // 꼬투리 더하기
    }
  }
  return sum;
}
let input = "(((())))(())((()))";
let output = solution(input);
console.log(output);

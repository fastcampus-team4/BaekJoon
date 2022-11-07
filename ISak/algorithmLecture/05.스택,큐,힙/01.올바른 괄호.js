function solution(input) {
  let stack = [];
  for (x of input) {
    if (x === "(") {
      stack.push(1);
    } else {
      stack.pop();
    }
  }

  return stack.length === 0 ? "YES" : "NO";
}
let input = "(()(()";
let output = solution(input);
console.log(output);

function solution(input) {
  let stack = [];
  for (x of input) {
    if (x === "(") {
      stack.push("(");
    } else if (x === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        stack.push(")");
      }
    }
  }

  return stack.length === 0 ? "YES" : "NO";
}
let input = "";
// let input = "()())";
// let input = "()()(";
// let input = "())(";
let output = solution(input);
console.log(output);

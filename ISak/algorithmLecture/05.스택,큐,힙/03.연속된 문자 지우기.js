function solution(input) {
  let stack = [];
  for (let i = 0; i < input.length; i++) {
    if (stack[stack.length - 1] !== input[i]) {
      stack.push(input[i]);
    } else {
      stack.pop();
    }
  }
  return stack.join("");
}
let input = "bcaacccbaabccabbaa";
let output = solution(input);
console.log(output);

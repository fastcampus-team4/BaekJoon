function removedString(input, removeList) {
  let result = input.split("");
  for (let i = removeList.length - 1; i >= 0; i--) {
    let [start, end] = removeList[i];
    result.splice(start, end - start + 1);
  }
  return result.join("");
}
function solution(input) {
  let stack = [];
  let start, end;
  let removeList = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") {
      stack.push(1);
      if (stack.length === 1) start = i;
    }
    if (input[i] === ")") {
      stack.pop();
      if (stack.length === 0) {
        end = i;
        removeList.push([start, end]);
      }
    }
  }
  return removedString(input, removeList);
}
let input = "abcde(f)g";
let output = solution(input);
console.log(output);

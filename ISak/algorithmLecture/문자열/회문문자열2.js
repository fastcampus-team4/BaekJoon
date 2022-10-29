function isPalindrome(input) {
  input = input.toUpperCase();
  let l = 0;
  let r = input.length - 1;

  while (l < r) {
    if (input[l] !== input[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}
function isPsudoPalin(input) {
  for (let i = 0; i < input.length; i++) {
    let subInput = input.slice(0, i) + input.slice(i + 1, input.length);
    console.log(subInput);
    if (isPalindrome(subInput)) {
      return true;
    }
  }
  return false;
}
function solution(input) {
  if (isPsudoPalin(input) || isPalindrome(input)) {
    return "YES";
  } else {
    return "NO";
  }
}
let input = "abcbdcba";
const output = solution(input);
console.log(output);

function isPalindrome(input) {
  input = input.toUpperCase();
  let l = 0;
  let r = input.length - 1;

  while (l < r) {
    if (input[l] !== input[r]) {
      console.log(input[l], input[r]);
      return false;
    }
    l++;
    r--;
  }
  return true;
}

function solution(input) {
  if (isPalindrome(input)) {
    return "YES";
  } else {
    return "NO";
  }
}
let input = "goog";
const output = solution(input);
console.log(output);

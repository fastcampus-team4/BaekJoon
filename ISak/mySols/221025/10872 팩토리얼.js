const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString();

N = Number(input);

const factorial = (n) => {
  let ans = 1;

  for (let i = 1; i <= n; i++) {
    ans *= i;
  }
  return ans;
};
console.log(factorial(N));

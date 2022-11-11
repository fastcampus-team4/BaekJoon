const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const signOf = (s) => {
  if (s === 0n) {
    return 0;
  } else if (s > 0n) {
    return "+";
  } else {
    return "-";
  }
};

for (let i = 0; i < 3; i++) {
  let sum = 0n;
  const N = Number(input[0]);
  const lis = input.slice(0, N + 1);
  input.splice(0, N + 1);
  for (let i = 1; i < N + 1; i++) {
    sum += BigInt(lis[i]);
  }
  console.log(signOf(sum));
}

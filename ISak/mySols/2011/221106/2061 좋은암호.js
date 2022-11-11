const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);
input = [143n, 12n];
let [K, L] = input;

function sol() {
  for (let i = 2n; i < L; i += 1n) {
    if (K % i === 0n) {
      console.log(`BAD ${i}`);
      return;
    }
  }

  console.log("GOOD");
}
sol();

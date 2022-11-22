let filePath = process.platform === "linux" ? 0 : "example.txt";
let [n, m] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

if (m === 1 || m === 2) {
  console.log(`NEWBIE!`);
} else if (n >= m && (m !== 1 || m !== 2)) {
  console.log(`OLDBIE!`);
} else {
  console.log(`TLE!`);
}

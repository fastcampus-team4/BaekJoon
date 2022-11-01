let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString();
input = parseInt(input);
for (let i = input; i > 0; i--) {
  console.log("*".repeat(i));
}

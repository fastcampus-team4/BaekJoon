const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

console.log(input.charCodeAt());

const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

let koStart = "가".charCodeAt() - 1;
console.log(input.charCodeAt() - koStart);

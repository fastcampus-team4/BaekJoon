const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString();

L = Number(input);

console.log(Math.ceil(L / 5));

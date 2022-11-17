const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const x = input[0];
const y = input[1];

const a = parseInt(x) * parseInt(y[2]);
const b = parseInt(x) * parseInt(y[1]);
const c = parseInt(x) * parseInt(y[0]);

const d = a + b * 10 + c * 100;

console.log(`${a}\n${b}\n${c}\n${d}`);

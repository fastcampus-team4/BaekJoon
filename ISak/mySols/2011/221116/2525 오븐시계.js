const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let H = Number(input[0].split(" ")[0]);
let M = Number(input[0].split(" ")[1]);
let C = Number(input[1]);

let mins = H * 60 + M + C;

mins = mins % (24 * 60);

H = parseInt(mins / 60);
M = mins % 60;

console.log(H, M);

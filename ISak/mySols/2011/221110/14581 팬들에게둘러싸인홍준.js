const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

let s = `:fan::fan::fan:\n:fan::${input}::fan:\n:fan::fan::fan:`;

console.log(s);

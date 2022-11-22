let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
console.log(`:fan::fan::fan:
:fan::${input}::fan:
:fan::fan::fan:`);

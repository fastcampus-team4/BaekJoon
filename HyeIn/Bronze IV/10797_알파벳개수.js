let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("");

const alphabet = "abcdefghijklmnopqrstuvwxyz";
let arr = new Array(26).fill(0);

input.forEach((i) => arr[alphabet.indexOf(i)]++);
console.log(arr.join(" "));

/* 다시 해볼 것 */

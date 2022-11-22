let filePath = process.platform === "linux" ? 0 : "../example.txt";
let [A, B, C] = require("fs").readFileSync(filePath).toString().split(" ");
A = parseInt(A);
B = parseInt(B);
C = parseInt(C);

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);

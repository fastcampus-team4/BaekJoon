const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

ans = "";
for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
  const ch = String.fromCharCode(i);
  ans += `${input.indexOf(ch)} `;
}
console.log(ans);

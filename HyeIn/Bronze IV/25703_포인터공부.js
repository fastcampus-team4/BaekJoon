let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
input = parseInt(input);
let answer = `int a;
int *ptr = &a;`;
let star = `*`;

for (let i = 2; i <= input; i++) {
  if (i === 2) {
    star += `*`;
    answer += `\nint ${star}ptr${i} = &ptr;`;
  } else if (i >= 3) {
    star += `*`;
    answer += `\nint ${star}ptr${i} = &ptr${i - 1};`;
  }
}
console.log(answer);

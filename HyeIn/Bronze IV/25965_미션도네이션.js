let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

// 전게임길이 = i(1) ~ input[i]+2

// 다음게임길이 = input[전게임길이+1] ~ j+input[j]+2

// 머리속 논리 : 인덱스가 1 부터 m+2 까지 돌고 난 다음 인덱스부터 또 m+2 까지 도는 것을 반복하고 싶은데 안된다..........
for (let i = 0; i < Number(input[0]); i++) {
  let j = 1;

  for (let j = i + 1; j <= input[i + 1] + 2; j++) {
    console.log(input[j]);
  }
  j = j;
}

let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" "));
let birth = input[0].map(Number);
let today = input[1].map(Number);
let year = today[0] - birth[0];

if (
  (year != 0 && today[1] < birth[1]) ||
  (today[1] == birth[1] && today[2] < birth[2])
) {
  console.log(year - 1 + "\n" + (year + 1) + "\n" + year);
} else {
  console.log(year + "\n" + (year + 1) + "\n" + year);
}

/* 
세는 나이와 연 나이는 생일과 관계없이 세는 나이는 올해연도 - 생년에 +1 해주고 연 나이는 올해연도 - 생년을 해주면 됨  
만 나이는 생일이 지났는지, 지나지 않았는지에 따라 계산
*/

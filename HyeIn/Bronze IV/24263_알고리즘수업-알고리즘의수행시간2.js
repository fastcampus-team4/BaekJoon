let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
console.log(input + "\n" + 1);

/* 해당 알고리즘의 수행시간은 무조건 1 이 나오고 입력값만큼 수행됨*/

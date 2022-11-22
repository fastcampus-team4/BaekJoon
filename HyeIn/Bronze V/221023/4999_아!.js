let filePath = process.platform === "linux" ? 0 : "../example.txt";
let [Jea, Doc] = require("fs").readFileSync(filePath).toString().split("\n");

if (Jea.length >= Doc.length) {
  console.log("go");
} else {
  console.log("no");
}

// split 에 \r 넣어줘서 틀림
// 그냥 길이 비교하면 끝..

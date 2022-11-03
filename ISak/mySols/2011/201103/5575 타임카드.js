const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let A = input[0].split(" ").map(Number);
let B = input[1].split(" ").map(Number);
let C = input[2].split(" ").map(Number);

function calc([h1, m1, s1], [h2, m2, s2]) {
  let seconds1 = h1 * 3600 + m1 * 60 + s1;
  let seconds2 = h2 * 3600 + m2 * 60 + s2;
  let work = seconds2 - seconds1;
  secsToHMS(work);
}
function secsToHMS(working) {
  let s = working % 60;
  let m = parseInt(working / 60, 10) % 60;
  let h = parseInt(parseInt(working / 60, 10) / 60, 10);

  console.log(h, m, s);
}

input.forEach((el) => {
  let x = el.split(" ").map(Number);
  calc(x.slice(0, 3), x.slice(3));
});

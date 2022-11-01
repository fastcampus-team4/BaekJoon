let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
let [ax, ay, az] = input[0].trim().split(" ").map(Number);
let [cx, cy, cz] = input[1].trim().split(" ").map(Number);

console.log(`${cx - az} ${cy / ay} ${cz - ax}`);

/* 
a.z + b.x = c.x
a.y × b.y = c.y
a.x + b.z = c.z
따라서
b.x = c.x - a.z
b.y = c.y / a.y
b.z = c.z - a.x
*/

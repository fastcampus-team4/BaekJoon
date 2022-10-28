const today = new Date();

const y = today.getFullYear();
const m = today.getMonth() + 1;
const d = today.getDate();

console.log(y);
console.log(`${m}`.padStart(2, "0"));
console.log(`${d}`.padStart(2, "0"));

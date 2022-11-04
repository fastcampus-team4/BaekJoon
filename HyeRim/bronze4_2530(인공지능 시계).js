const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().split('\n');

let [h, m, s] = input.shift().split(' ').map(Number);

let time = Number(input.shift());

let ah, am, as;

am = Math.floor(time/60);
as = time%60;
ah = Math.floor(am/60);
am %= 60;

s+=as;

let carry=0;

if(s >= 60){
    carry+=Math.floor(s/60);
    s%=60;
}

m+=(am + carry);

carry = 0;

if(m >= 60){
    carry +=Math.floor(m/60);
    m%=60;
}

h+=(ah + carry);
if(h>=24) h%=24;

console.log(`${h} ${m} ${s}`)


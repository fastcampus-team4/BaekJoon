for (let a = 6; a <= 100; a++) {
  for (let b = 2; b <= 100; b++) {
    for (let c = b + 1; c <= 100; c++) {
      for (let d = c + 1; d <= 100; d++) {
        if (a <= d) continue;
        if (Math.pow(a, 3) === Math.pow(b, 3) + Math.pow(c, 3) + Math.pow(d, 3))
          console.log(`Cube = ${a}, Triple = (${b},${c},${d})`);
      }
    }
  }
}

const solution = n => [...Array(n).keys()].map(v => v + 1).filter(v => n % v === 0).reduce((a, b) => a + b, 0);

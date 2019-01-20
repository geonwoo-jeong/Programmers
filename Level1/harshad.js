const solution = x => !(x % String(x).split("").reduce((a, c) => a + c * 1, 0));

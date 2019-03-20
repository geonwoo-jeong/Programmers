const solution = (A, B) => {
  const a = [...A].sort((a, b) => a - b);
  const b = [...B].sort((a, b) => b - a);

  return a.reduce((sum, el, i) => (sum += el * b[i]), 0);
};

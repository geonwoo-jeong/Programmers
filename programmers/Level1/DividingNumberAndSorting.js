const solution = (arr, divisor) => {
  const answer = arr.filter(value => value % divisor === 0);
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
};

function solution(n) {
  let cache = [0, 1];

  for (let i = 2; i <= n; i++)
    cache[i] = (cache[i - 2] + cache[i - 1]) % 1234567;

  return cache[n];
}

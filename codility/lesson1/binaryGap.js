function solution(N) {
  const binary = N.toString(2);
  let binaryGap = 0;
  let result = 0;

  for (value of binary) {
    if (value === "0") {
      binaryGap++;
    } else if (value === "1") {
      if (binaryGap > result) {
        result = binaryGap;
      }
      binaryGap = 0;
    }
  }

  return result;
}

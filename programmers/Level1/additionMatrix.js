const solution = (arr1, arr2) => {
  let answer = [[]];
  answer = arr1.map((arr, i) => arr.map((v, j) => v + arr2[i][j]))
  return answer;
}

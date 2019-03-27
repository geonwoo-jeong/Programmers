const solution = (land) => {
  for (let i = 1; i < land.length; i++) {
    const prevRow = land[i-1].slice();
    for (let j = 0; j < 4; j++ ) {
      const availableNums = prevRow.slice(0,j).concat(prevRow.slice(j+1));
      land[i][j] += Math.max(...availableNums);
    }                 
  }

  return Math.max(...land[land.length-1])
}

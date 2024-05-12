var largestLocal = function (grid) {
  const N = grid.length;
  const maxLocal = [];

  for (let i = 0; i < N - 2; i++) {
    // console.log(grid[i]);
    maxLocal.push([])
    for(let j=0;j<N-2;j++){
        let max = -Infinity
        for(let x=i;x<i+3;x++){
            for(let y=j; y<j+3;y++){
                max = Math.max(max,grid[x][y])
            }
        }
        maxLocal[i].push(max)

    }
  }
  return maxLocal
};

console.log(
  largestLocal([
    [9, 9, 8, 1],
    [5, 6, 2, 6],
    [8, 2, 6, 4],
    [6, 2, 2, 2],
  ])
);
console.log(
  largestLocal([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 2, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ])
);

const grid = [[0,6,0],[5,8,7],[0,9,0]]
const grid1= [[1,0,7],[2,0,6],[3,4,5],[0,3,0]]

var getMaximumGold = function(grid) {
    let maxGold = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    const dfs = (r, c, currentGold) => {
        // Collect the gold at the current cell
        let gold = grid[r][c];
        currentGold += gold;

        // Update the maxGold
        maxGold = Math.max(maxGold, currentGold);

        // Mark this cell as visited by setting it to 0
        grid[r][c] = 0;

        // Explore all four possible directions
        const directions = [
            [0, 1],  // right
            [1, 0],  // down
            [0, -1], // left
            [-1, 0]  // up
        ];

        for (let [dr, dc] of directions) {
            const newRow = r + dr;
            const newCol = c + dc;

            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && grid[newRow][newCol] > 0) {
                dfs(newRow, newCol, currentGold);
            }
        }

        // Backtrack: restore the cell's gold value
        grid[r][c] = gold;
    };

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] > 0) {
                dfs(r, c, 0);
            }
        }
    }

    return maxGold;
};


console.log(getMaximumGold(grid));
console.log(getMaximumGold(grid1));
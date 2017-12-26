function sudoku2(grid) {
    let cols = new Map();
    let rows = new Map();
    let blocks = new Map();
    
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(Number(grid[i][j])){
                if(!cols.has(j)){
                    cols.set(j, new Set([grid[i][j]]));
                }
                else if(cols.get(j).has(grid[i][j])){
                    return false;
                }
                else if(cols.has(j) && !cols.get(j).has(grid[i][j])){
                    cols.get(j).add(grid[i][j]);
                }
                
                if(!rows.has(i)){
                    rows.set(i, new Set([grid[i][j]]));
                }
                else if(rows.get(i).has(grid[i][j])){
                    return false;
                }
                else if(rows.has(i) && !rows.get(i).has(grid[i][j])){
                    rows.get(i).add(grid[i][j]);
                }
                
                
                if(i >= 0 && i < 3 && j >= 0 && j < 3){
                    if(!blocks.has(1)){
                        blocks.set(1, new Set());
                        blocks.get(1).add(grid[i][j]);
                    }
                    else if(!blocks.get(1).has(grid[i][j])){
                        blocks.get(1).add(grid[i][j]);
                    }
                    else if(blocks.get(1).has(grid[i][j])){
                        return false;
                    }
                }
                else if(i >= 0 && i < 3 && j >= 3 && j < 6){
                    if(!blocks.has(2)){
                        blocks.set(2, new Set());
                        blocks.get(2).add(grid[i][j]);
                    }
                    else if(!blocks.get(2).has(grid[i][j])){
                        blocks.get(2).add(grid[i][j]);
                    }
                    else if(blocks.get(2).has(grid[i][j])){
                        return false;
                    }
                }
                else if(i >= 0 && i < 3 && j >= 6 && j < 9){
                    if(!blocks.has(3)){
                        blocks.set(3, new Set());
                        blocks.get(3).add(grid[i][j]);
                    }
                    else if(!blocks.get(3).has(grid[i][j])){
                        blocks.get(3).add(grid[i][j]);
                    }
                    else if(blocks.get(3).has(grid[i][j])){
                        return false;
                    }
                }
                else if(i >= 3 && i < 6 && j >= 0 && j < 3){
                    if(!blocks.has(4)){
                        blocks.set(4, new Set());
                        blocks.get(4).add(grid[i][j]);
                    }
                    else if(!blocks.get(4).has(grid[i][j])){
                        blocks.get(4).add(grid[i][j]);
                    }
                    else if(blocks.get(4).has(grid[i][j])){
                        return false;
                    }
                }
                else if(i >= 3 && i < 6 && j >= 3 && j < 6){
                    if(!blocks.has(5)){
                        blocks.set(5, new Set());
                        blocks.get(5).add(grid[i][j]);
                    }
                    else if(!blocks.get(5).has(grid[i][j])){
                        blocks.get(5).add(grid[i][j]);
                    }
                    else if(blocks.get(5).has(grid[i][j])){
                        return false;
                    }
                }
                else if(i >= 3 && i < 6 && j >= 6 && j < 9){
                    if(!blocks.has(6)){
                        blocks.set(6, new Set());
                        blocks.get(6).add(grid[i][j]);
                    }
                    else if(!blocks.get(6).has(grid[i][j])){
                        blocks.get(6).add(grid[i][j]);
                    }
                    else if(blocks.get(6).has(grid[i][j])){
                        return false;
                    }
                }
                else if(i >= 6 && i < 9 && j >= 0 && j < 3){
                    if(!blocks.has(7)){
                        blocks.set(7, new Set());
                        blocks.get(7).add(grid[i][j]);
                    }
                    else if(!blocks.get(7).has(grid[i][j])){
                        blocks.get(7).add(grid[i][j]);
                    }
                    else if(blocks.get(7).has(grid[i][j])){
                        return false;
                    }
                }
                else if(i >= 6 && i < 9 && j >= 3 && j < 6){
                    if(!blocks.has(8)){
                        blocks.set(8, new Set());
                        blocks.get(8).add(grid[i][j]);
                    }
                    else if(!blocks.get(8).has(grid[i][j])){
                        blocks.get(8).add(grid[i][j]);
                    }
                    else if(blocks.get(8).has(grid[i][j])){
                        return false;
                    }
                }
            }
        }
    }
    
    return true;
    
}


/*
Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers in such a way that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.

Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according to the layout rules described above. Note that the puzzle represented by grid does not have to be solvable.

Example

For

grid = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
        ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
        ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
        ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
        ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
        ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
        ['.', '.', '.', '5', '.', '.', '.', '7', '.']]
the output should be
sudoku2(grid) = true;

For

grid = [['.', '.', '.', '.', '2', '.', '.', '9', '.'],
        ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
        ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
        ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
        ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
        ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
        ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
        ['.', '2', '.', '.', '3', '.', '.', '.', '.']]
the output should be
sudoku2(grid) = false.

The given grid is not correct because there are two 1s in the second column. Each column, each row, and each 3 × 3 subgrid can only contain the numbers 1 through 9 one time.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.char grid

A 9 × 9 array of characters, in which each character is either a digit from '1' to '9' or a period '.'.

[output] boolean

Return true if grid represents a valid Sudoku puzzle, otherwise return false.
*/

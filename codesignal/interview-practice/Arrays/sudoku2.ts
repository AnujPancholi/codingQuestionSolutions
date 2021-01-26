/*
    codesignal
    category: "interview-practice/Arrays"
    problem title: "sudoku2"
*/

function getSubgrid(coords: number[]): string {
    let gridNum: number = 0;
    gridNum+=Math.floor((coords[1])/3);
    gridNum+=Math.floor((coords[0])/3)*3;
    return `GRID_${gridNum}`;
}

function sudoku2(grid: string[][]): boolean {
    let isValidSudoku: boolean = true;
    
    const groupsMap: Map<string,Set<string>> = new Map<string,Set<string>>();
    
    for(let r: number = 0;r<grid.length;++r){
        for(let c: number = 0;c<grid[0].length;++c){
            
            if(grid[r][c]!=='.'){
                const keys: string[] = [`ROW_${r}`,`COL_${c}`,getSubgrid([r,c])];
                for(const k of keys){
                    const currSet: Set<string> | undefined = groupsMap.get(k);
                if(currSet){
                    if(currSet.has(grid[r][c])){
                            isValidSudoku = false;
                            break;    
                        } else {
                            currSet.add(grid[r][c]);
                        }
                    } else {
                        groupsMap.set(k, new Set([grid[r][c]]))
                    }    
                }
                
                
                if(!isValidSudoku){
                    break;
                }
                    
            }
            
        }
        if(!isValidSudoku){
            break;
        }
    }
    
    return isValidSudoku;
    

}

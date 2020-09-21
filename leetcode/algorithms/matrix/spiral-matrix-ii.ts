/*
    leetcode
    category: "Algorithms"
    problem title: "Spiral Matrix II"
*/

function generateMatrix(n: number): number[][] {
    const matrix: number[][] = Array.from({length: n},(v,i) => Array.from({length: n},(v,i) => 0));
    // console.log(matrix);
    
    let i: number = 1,dir: number = 1, travCount: number = n;
    let row: number = 0,col: number = 0;
    while(travCount>0){
        
        console.log(travCount)
        for(let t: number = 0;t<travCount;t++){
            console.log(row,col)
            matrix[col][row] = i;
            ++i;
            row+=dir;
        }
        row-=dir;
        col+=dir;
        --travCount;
        for(let t: number = 0;t<travCount;t++){
            console.log(row,col)
            matrix[col][row] = i;
            ++i;
            col+=dir;
        }
        col-=dir;
        row-=dir;
        dir*=-1;
    }
    
    return matrix;
    
};
function transpose(a: number[][]): number[][]{
    let diag: number = 0,n: number = a.length;
    while(diag<n){
        let i: number = 1;
        while(i+diag<n){
            [a[diag][diag+i],a[diag+i][diag]] = [a[diag+i][diag],a[diag][diag+i]]
            ++i;
        }
        ++diag;
    }
    
    return a;
}

function reverseRows(a: number[][]): number[][]{
    let rowIndex: number = 0,n:number = a.length;
    while(rowIndex<n){
        let i:number = 0;
        while(i<Math.floor(n/2)){
            [a[rowIndex][i],a[rowIndex][n-1-i]] = [a[rowIndex][n-1-i],a[rowIndex][i]]
            ++i;
        }
        ++rowIndex;
    }
    
    return a;
}


function rotateImage(a: number[][]): number[][] {
    a = transpose(a);
    a = reverseRows(a);
    
    return a;

}

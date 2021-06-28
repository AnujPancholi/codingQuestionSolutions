function generate(numRows: number): number[][] {
    
    
    const arr: number[] = Array.from({
        length: numRows
    },(v,i) => i)
    
    return arr.reduce((a,i) => {
        a.push(i===0 ? [1] : Array.from({
            length: i+1
        },(v,j) => {
            return j===0 || j===i ? 1 : a[i-1][j-1]+a[i-1][j];
        }))
        return a;
    },new Array<Array<number>>())

};
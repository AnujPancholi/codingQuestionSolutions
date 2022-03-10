const MAX_VALUE: number = Math.pow(2,31) - 1;
function reverse(x: number): number {
    const multiplier = x<0 ? -1 : 1;
    x*=multiplier;
    const stk: number[] = [];
    while(x>0){
        const curr = x%10;
        stk.push(curr);
        x = ~~(x/10);
    }
    
    
    let i: number = 0, sum: number = 0;
    while(stk.length>0){
        const curr: number = stk.pop();
        sum+=curr*Math.pow(10,i);
        ++i;
    }
    return sum>MAX_VALUE ? 0 : sum*multiplier;

};
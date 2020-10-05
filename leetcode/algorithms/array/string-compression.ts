/*
	leetcode
	category: "Algorithms"
	problem title: "String Compression"
*/

function compress(chars: string[]): number {
    
    let i: number = 0,j: number = 0,t: number = 0;
    
    while(j<chars.length){
        chars[t]=chars[i];
        t++;
        j=i+1;
        while(j<chars.length && chars[j]===chars[i])++j;
        if(j-i>1){
            (j-i).toString().split('').forEach(digit => {
                chars[t]=digit;
                t++;
            });
        }
        
        if(j===chars.length){
            break;
        }
        i=j;
    }
    
    return t;

};
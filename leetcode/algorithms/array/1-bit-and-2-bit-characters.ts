/*
	leetcode
	category: "Algorithms"
	problem title: "1 Bit and 2 Bit Characters"
*/

function isOneBitCharacter(bits: number[]): boolean {
    
    let i: number = 0;
    let isOneBit: boolean = false;
    
    while(i<bits.length){
        if(i===bits.length-1){
            isOneBit=true;
            break;
        }
        if(bits[i]===1){
            i+=2;
        } else {
            ++i;
        }
    }
    
    return isOneBit;

};
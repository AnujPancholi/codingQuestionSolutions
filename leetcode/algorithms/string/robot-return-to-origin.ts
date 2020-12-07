/*
    leetcode
    category: "Algorithms"
    problem title: "Robot Return to Origin"
*/


function judgeCircle(moves: string): boolean {
    let x: number = 0,y: number = 0;
    
    for(let i: number = 0;i<moves.length;++i){
        switch(moves[i]){
            case "U":
                ++y;
                break;
            case "D":
                --y;
                break;
            case "L":
                --x;
                break;
            case "R":
                ++x;
                break;
        }
    }
    
    return x===0 && y===0;

};
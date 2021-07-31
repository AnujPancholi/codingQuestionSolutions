const readLine = require('readline');
 
const lineReaderInterface = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
})
 
 
 
const solution = async() => {
    lineReaderInterface.on('line',(input) => {
        const [n,travelTime] = input.split(' ').map(i => parseInt(i));
 
        const timeLimit = 4*60;
 
        const timeRemaining = timeLimit - travelTime;
        // console.log(timeRemaining)
 
        const getCumulativeTimeToSolveProblem = (i) => (i/2)*(2*5 + (i-1)*5);
 
        let l=1,h=Math.min(n,10),numQues=timeRemaining<5 ? 0 : -1;
        while(h-l>1 && numQues===-1){
            const m = ~~((h+l)/2);
            // console.log(m)
            if(getCumulativeTimeToSolveProblem(m)<timeRemaining){
                l=m;
            } else if(getCumulativeTimeToSolveProblem(m)>timeRemaining){
                h=m;
            } else {
                numQues=m;
                break;
            }
        }
 
        if(numQues===-1){
            numQues = getCumulativeTimeToSolveProblem(h)<=timeRemaining ? h : l
        }
 
        console.log(numQues)
 
        lineReaderInterface.close();
    })
}
 
solution();
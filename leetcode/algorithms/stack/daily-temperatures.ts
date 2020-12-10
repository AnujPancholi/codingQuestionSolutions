/*
    leetcode
    category: "Algorithms"
    problem title: "Daily Temperatures"
*/

interface StackElement {
    value: number;
    index: number;
}

function dailyTemperatures(T: number[]): number[] {
    const stackArr: Array<StackElement> = [];
    const result: number[] = Array.from({
        length: T.length
    },() => 0);
    
    T.forEach((num,index) => {
        
        while(stackArr.length>0 && stackArr[stackArr.length-1].value<num){
            const element: StackElement = stackArr.pop();
            result[element.index] = index - element.index; 
        }
        
        stackArr.push({
            value: num,
            index: index
        })
        
    })
    
    return result;
    
    
};
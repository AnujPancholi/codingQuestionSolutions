/*
    leetcode
    category: "Algorithms"
    problem title: "Top K Frequent Elements"
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */


 //@TODO: getting late for clean/improve this later

const MaxHeap = function(){
    this._heap = [];
}

MaxHeap.prototype.printState = function(){
    console.table(this._heap.map((elem,index) => ({
        index: index,
        key: elem
    })));
}

MaxHeap.prototype.getParentIndex = function(index){
    return parseInt((index-1)/2);
}

MaxHeap.prototype.getLeftChildIndex = function(index){
    return parseInt((2*index)+1);
}

MaxHeap.prototype.getRightChildIndex = function(index){
    return parseInt((2*index)+2);
}

MaxHeap.prototype.swapValues = function(i,j){
    let temp = this._heap[i];
    this._heap[i] = this._heap[j];
    this._heap[j]=temp;
}

MaxHeap.prototype.peek = function(){
    return this._heap[0] || null;
}



MaxHeap.prototype.heapifyUp = function(_params = {}){
    let currentIndex = this._heap.length-1;
    while(true){
        let parentIndex = this.getParentIndex(currentIndex);
        if(currentIndex>0 && this._heap[parentIndex]<this._heap[currentIndex]){
            this.swapValues(parentIndex, currentIndex);
            currentIndex=parentIndex;
        } else {
            break;
        }
    }
}

MaxHeap.prototype.heapifyDown = function(){
    let currentIndex = 0;
    while(currentIndex<this._heap.length){
        let leftChildIndex = this.getLeftChildIndex(currentIndex);
        let rightChildIndex = this.getRightChildIndex(currentIndex);
        
        let leftChildKey = this._heap[leftChildIndex] || null;
        let rightChildKey = this._heap[rightChildIndex] || null;
        
        if(!leftChildKey && !rightChildKey){
            break;
        } else if(leftChildKey && (!rightChildKey || rightChildKey<=leftChildKey)){
            if(leftChildKey>this._heap[currentIndex]){
                this.swapValues(leftChildIndex,currentIndex);
                currentIndex=leftChildIndex;
                continue;
            } else {
                break;
            }
        } else if(leftChildKey<rightChildKey){
            if(rightChildKey>this._heap[currentIndex]){
                this.swapValues(rightChildIndex,currentIndex);
                currentIndex=rightChildIndex;
                continue;
            } else {
                break;
            }
        } else {
            console.log("oops");
            break;
        }
        
        // if(leftChildIndex<this._heap.length && this._heap[leftChildIndex]>this._heap[currentIndex]){
        //     this.swapValues(leftChildIndex,currentIndex);
        //     currentIndex = leftChildIndex;
        //     continue;
        // } else if(rightChildIndex<this._heap.length && this._heap[rightChildIndex]>this._heap[currentIndex]){
        //     this.swapValues(rightChildIndex, currentIndex);
        //     currentIndex = rightChildIndex;
        //     continue;
        // } else {
        //     break;
        // }
    }
}


MaxHeap.prototype.add = function(value){
    this._heap.push(value);
    this.heapifyUp();
}

MaxHeap.prototype.extract = function(){
    // console.log('state at extract');
    // this.printState();
    if(this._heap.length===0){
        return null;
    }
    let extractedValue = this._heap[0];
    this._heap[0] = this._heap.splice(this._heap.length-1,1)[0];
    // console.log("state before heapifyDown");
    // this.printState();
    this.heapifyDown();
    return extractedValue;
    
}

var topKFrequent = function(nums, k) {
    const freqMap = nums.reduce((fMap,num) => {
        if(!fMap[num]){
            fMap[num]=1;
        } else {
            ++fMap[num];
        }
        return fMap;
    },{});
    
    const frequencies = [];
    
    
    Object.keys(freqMap).forEach(elem => {
        frequencies.push(freqMap[elem]);
    })
    // console.log(freqMap);
    // console.log(frequencies.sort((a,b) => a-b));
    
    const freqHeap = new MaxHeap();
    for(let i=0;i<frequencies.length;++i){
        freqHeap.add(frequencies[i]);
    }
    
//     freqHeap.add(4);
    
    // freqHeap.printState();
    
    const answerArr = [];
    const numbers = Object.keys(freqMap);
    while(k>0){
        let extractedFreq = freqHeap.extract();
        // if(k===6 || k===5){
        //     console.log(extractedFreq);
        //     freqHeap.printState();
        // }
        let targetNumber = numbers.find(number => freqMap[number]===extractedFreq);
        answerArr.push(targetNumber);
        delete freqMap[targetNumber];
        --k;
    }
    // freqHeap.printState();
    
    return answerArr;
    
};
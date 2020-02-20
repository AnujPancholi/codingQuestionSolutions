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
        if(currentIndex>0 && this._heap[parentIndex].freq<this._heap[currentIndex].freq){
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
        
        let leftChildKey = this._heap[leftChildIndex] ? this._heap[leftChildIndex].freq : null;
        let rightChildKey = this._heap[rightChildIndex] ? this._heap[rightChildIndex].freq : null;
        
        if(!leftChildKey && !rightChildKey){
            break;
        } else if(leftChildKey && (!rightChildKey || rightChildKey<=leftChildKey)){
            if(leftChildKey>this._heap[currentIndex].freq){
                this.swapValues(leftChildIndex,currentIndex);
                currentIndex=leftChildIndex;
                continue;
            } else {
                break;
            }
        } else if(leftChildKey<rightChildKey){
            if(rightChildKey>this._heap[currentIndex].freq){
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
    }
}


MaxHeap.prototype.add = function(obj){
    this._heap.push(obj);
    this.heapifyUp();
}

MaxHeap.prototype.extract = function(){
    
    if(this._heap.length===0){
        return null;
    }
    let extractedValue = this._heap[0];
    this._heap[0] = this._heap.splice(this._heap.length-1,1)[0];
    
    this.heapifyDown();
    return extractedValue;
    
}

var topKFrequent = function(nums, k) {
    const freqMap = nums.reduce((fMap,num) => {
        if(!fMap[num]){
            fMap[num]= {
                number: num,
                freq: 1
            };
        } else {
            ++fMap[num].freq;
        }
        return fMap;
    },{});
    const frequencies = Object.values(freqMap);
    const freqHeap = new MaxHeap();
    for(let i=0;i<frequencies.length;++i){
        freqHeap.add(frequencies[i]);
    }
    const ansArr = [];
    for(let i=0;i<k;++i){
        ansArr.push(freqHeap.extract().number);
    }
    
    return ansArr;
    
};
/*
    leetcode
    category: "Algorithms"
    problem title: "Kth Largest Element in a Stream
*/

/**
 * @param {number} k
 * @param {number[]} nums
 */

const MinHeap = function(){
	this._heap = [];
}

MinHeap.prototype.swapValues = function(i1,i2){
	const temp = this._heap[i1];
	this._heap[i1] = this._heap[i2];
	this._heap[i2] = temp;
}

MinHeap.prototype.printHeapArray = function(){
	console.log(this._heap);
}

MinHeap.prototype.getParentIndex = function(index){
	return parseInt((index-1)/2);
}

MinHeap.prototype.getRightChildIndex = function(index){
	const rightChildIndex = parseInt((index*2)+2);
	return rightChildIndex<this._heap.length ? rightChildIndex : null;
}

MinHeap.prototype.getLeftChildIndex = function(index){
	const leftChildIndex = parseInt((index*2)+1);
	return leftChildIndex<this._heap.length ? leftChildIndex : null;
}


MinHeap.prototype.heapifyUp = function(){
	let currentIndex = this._heap.length - 1;
	while(currentIndex>0){
		const parentIndex = this.getParentIndex(currentIndex);
		if(this._heap[parentIndex]>this._heap[currentIndex]){
			this.swapValues(parentIndex,currentIndex);
			currentIndex = parentIndex;
		} else {
			break;
		}
	}
}

MinHeap.prototype.heapifyDown = function(){
	let currentIndex = 0;
	while(currentIndex<this._heap.length){
		const leftChildIndex = this.getLeftChildIndex(currentIndex);
		if(leftChildIndex){
			const rightChildIndex = this.getRightChildIndex(currentIndex);
			let candidateIndex = rightChildIndex && this._heap[rightChildIndex]<this._heap[leftChildIndex] ? rightChildIndex : leftChildIndex;
			if(this._heap[candidateIndex]<this._heap[currentIndex]){
				this.swapValues(candidateIndex,currentIndex);
				currentIndex = candidateIndex;
			} else {
				break;
			}
		} else {
			break;
		}
	}
}

MinHeap.prototype.getSize = function(){
	return this._heap.length;
}

MinHeap.prototype.peek = function(){
    return this._heap[0];
}

MinHeap.prototype.add = function(value){
	this._heap.push(value);
	this.heapifyUp();
}

MinHeap.prototype.poll = function(){
	const extractedValue = this._heap[0] || null;
	const lastValue = this._heap.pop();
	if(this._heap.length!=0){
		this._heap[0] = lastValue;
		this.heapifyDown();
	}
	return extractedValue;
}

var KthLargest = function(k, nums) {
    this._minHeap = new MinHeap();
    this.k=k;
    for(let i=0;i<nums.length;++i){
        this._minHeap.add(nums[i]);
        if(this._minHeap.getSize()>this.k){
            this._minHeap.poll();
        }
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this._minHeap.add(val);
    if(this._minHeap.getSize()>this.k){
        this._minHeap.poll();
    }
    return this._minHeap.peek();
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
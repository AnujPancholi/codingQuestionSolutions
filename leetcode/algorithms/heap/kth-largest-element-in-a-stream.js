/*
    leetcode
    category: "Algorithms"
    problem title: "Kth Largest Element in a Stream
*/

/**
 * @param {number} k
 * @param {number[]} nums
 */

const Heap = function(compare){
	this._heap = [];
	this._compare = compare;
}

Heap.prototype.swapValues = function(i1,i2){
	const temp = this._heap[i1];
	this._heap[i1] = this._heap[i2];
	this._heap[i2] = temp;
}

Heap.prototype.printHeapArray = function(){
	console.log(this._heap);
}

Heap.prototype.getParentIndex = function(index){
	return parseInt((index-1)/2);
}

Heap.prototype.getRightChildIndex = function(index){
	const rightChildIndex = parseInt((index*2)+2);
	return rightChildIndex<this._heap.length ? rightChildIndex : null;
}

Heap.prototype.getLeftChildIndex = function(index){
	const leftChildIndex = parseInt((index*2)+1);
	return leftChildIndex<this._heap.length ? leftChildIndex : null;
}


Heap.prototype.heapifyUp = function(){
	let currentIndex = this._heap.length - 1;
	while(currentIndex>0){
		const parentIndex = this.getParentIndex(currentIndex);
		if(this._compare(this._heap[currentIndex],this._heap[parentIndex])>0){
			this.swapValues(parentIndex,currentIndex);
			currentIndex = parentIndex;
		} else {
			break;
		}
	}
}

Heap.prototype.heapifyDown = function(){
	let currentIndex = 0;
	while(currentIndex<this._heap.length){
		const leftChildIndex = this.getLeftChildIndex(currentIndex);
		if(leftChildIndex){
			const rightChildIndex = this.getRightChildIndex(currentIndex);
			let candidateIndex = rightChildIndex && this._compare(this._heap[rightChildIndex],this._heap[leftChildIndex])>0 ? rightChildIndex : leftChildIndex;
			if(this._compare(this._heap[candidateIndex],this._heap[currentIndex])>0){
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

Heap.prototype.getSize = function(){
	return this._heap.length;
}

Heap.prototype.peek = function(){
	return this._heap[0];
}

Heap.prototype.add = function(value){
	this._heap.push(value);
	this.heapifyUp();
}

Heap.prototype.poll = function(){
	const extractedValue = this._heap[0] || null;
	const lastValue = this._heap.pop();
	if(this._heap.length!=0){
		this._heap[0] = lastValue;
		this.heapifyDown();
	}
	return extractedValue;
}
var KthLargest = function(k, nums) {
    this._minHeap = new Heap((i,j) => (j-i));
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
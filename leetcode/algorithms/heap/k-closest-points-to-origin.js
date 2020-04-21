/*
    leetcode
    category: "Algorithms"
    problem title: "K Closest Points to Origin"
*/

/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
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



const getDistance = (p1,p2) => Math.sqrt(Math.pow(p1[0]-p2[0],2)+Math.pow(p1[1]-p2[1],2));


var kClosest = function(points, K) {
    const pointsMinHeap = new Heap((p1,p2) => (p2.distance-p1.distance));
    points.forEach(point => {
        pointsMinHeap.add({
            coords: point,
            distance: getDistance(point,[0,0])
        })
    })
    const closestPoints = [];
    for(let i=0;i<K;++i){
        closestPoints.push(pointsMinHeap.poll().coords);
    }
    return closestPoints;
};
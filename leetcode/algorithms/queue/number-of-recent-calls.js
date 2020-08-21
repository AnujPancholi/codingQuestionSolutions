/*
    leetcode
    category: "Algorithms"
    problem title: "Binary Search"
*/


var RecentCounter = function() {
    
    this._queue = [];
    
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    let removals = 0,i=0;
    while(i<this._queue.length && t-this._queue[i]>3000){
        ++i;
    }
    this._queue.splice(0,i);
    this._queue.push(t);
    return this._queue.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
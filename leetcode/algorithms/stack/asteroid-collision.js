/*
    leetcode
    category: "Algorithms"
    problem title: "Asteroid Collision"
*/


/**
 * @param {number[]} asteroids
 * @return {number[]}
 */

const _private_stack_map = new WeakMap();

const Stack = function(){
	const _stackData = {
		stack: []
	}
	_private_stack_map.set(this,_stackData);
	
}


Stack.prototype.push = function(val){
	let stackData = _private_stack_map.get(this);
	stackData.stack.push(val);
}

Stack.prototype.pop = function(){
	let stackData = _private_stack_map.get(this);
	return stackData.stack.pop();
}

Stack.prototype.peek = function(){
	let stackData = _private_stack_map.get(this);
	return stackData.stack.length===0 ? null : stackData.stack[stackData.stack.length-1];
}

Stack.prototype.getSize = function(){
	let stackData = _private_stack_map.get(this);
	return stackData.stack.length;
}


const getCollisionResult = (n1,n2) => {
    if(n1>0 && n2<0){
        if(Math.abs(n1)>Math.abs(n2)){
            return n1;
        } else if(Math.abs(n1)<Math.abs(n2)) {
            return n2;            
        } else {
            return 0;
        }
    } else {
        return null;
    }
}

var asteroidCollision = function(asteroids) {
    
    const astStack = new Stack();
        
    for(let i=0;i<asteroids.length;i++){
        let resultToPush = asteroids[i];
        while(astStack.peek()!=null){
            const collisionResult = getCollisionResult(astStack.peek(),resultToPush);
            if(collisionResult===null){
                break;
            }
            astStack.pop();
            if(collisionResult!=0){
                resultToPush = collisionResult;
            } else {
                resultToPush=null;
                break;
            }
        }
        if(resultToPush){
            astStack.push(resultToPush);
        }
    }
    
    const arr = [];
    while(astStack.peek()){
        arr.push(astStack.pop());
    }
    
    return arr.reverse();
    
};
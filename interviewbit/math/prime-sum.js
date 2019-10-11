/*
	interviewbit
	track: "programming",
	section: "math",
	problem title: "Prime Sum"
*/

//I hate the fact the Interviewbit does not support ES6.

function isPrime(n){
    for(var i=2;i<=Math.floor(Math.sqrt(n));i++){
        if(n%i===0){
            return false;
        }
    }
    return true;
}

module.exports = { 
 //param A : integer
 //return a array of integers
	primesum : function(A){
	    var arr = [0,0];
	   // console.log(isPrime(4))
	    
	   for(var i=2;i<=Math.floor(A/2);i++){
	       if(isPrime(i) && isPrime(A-i)){
	           arr = [i,A-i];
	           break;
	       }
	   }
	   return arr;
	}
};

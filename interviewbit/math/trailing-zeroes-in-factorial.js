/*
	interviewbit
	track: "programming",
	section: "math",
	problem title: "Trailing Zeroes in Factorial"
*/

module.exports = { 
 //param A : integer
 //return an integer
	trailingZeroes : function(A){
	    var i=1,fivesCount=0;
        while(A>=Math.pow(5,i)){
            fivesCount+=Math.floor(A/(Math.pow(5,i)));
            i++;
        }
        return fivesCount;
	}
};
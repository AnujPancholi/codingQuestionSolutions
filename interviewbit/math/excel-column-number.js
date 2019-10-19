/*
	interviewbit
	track: "programming"
	section: "math"
	problem title: "Excel Column Number"
*/

module.exports = { 
 //param A : string
 //return an integer
	titleToNumber : function(A){
	    var num = 0;
	    for(var i=A.length-1;i>=0;i--){
	        num+=(A.charCodeAt((A.length-1)-i)-64)*(Math.pow(26,i));
	    }
	    return num;
	}
};

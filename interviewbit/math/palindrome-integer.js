/*
	interviewbit
	track: "programming",
	section: "math",
	problem title: "Palindrome Integer"
*/


module.exports = { 
 //param A : integer
 //return an integer
	isPalindrome : function(A){
	    if(A<0){
	        return 0;
	    }
	    
	    var copyA = A,length=0;
	    while(copyA>0){
	        copyA=Math.floor(copyA/10);
	        length++;
	    }
	    if(length===1){
	        return 1;
	    }
	   // return length
	   for(var itr=1;itr<=Math.floor(length/2);itr++){
	       if(Math.floor((A%Math.pow(10,itr))/Math.pow(10,itr-1))!=Math.floor((A/Math.pow(10,length-itr))%10)){
	           return 0;
	       }
	   }
	   return 1;
	   

	}
};
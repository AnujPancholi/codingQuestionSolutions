/*
	interviewbit
	track: "programming"
	section: "arrays"
	problem statement: "Spiral Order Matrix I"
*/

module.exports = { 
 //param A : array of array of integers
 //return a array of integers
	spiralOrder : function(A){
	   // var horizontalSize = A[0].length;
	   // var verticalSize = A.length;
	    
	    var hTrav = A[0].length, vTrav = A.length-1;
	    var dir = 1,h=-1,v=0;
	    var ansArray = [];
	    while(true){
	        for(var i=0;i<hTrav;i++){
	            h+=dir;
	            ansArray.push(A[v][h]);
	        }
	        hTrav--;
	        if(vTrav===0){
	            break;
	        }
	        for(var i=0;i<vTrav;i++){
	            v+=dir;
                ansArray.push(A[v][h]);	            
	        }
	        vTrav--;
	        if(hTrav===0){
	            break;
	        }
	        dir*=-1;
	    }
	    
	    return ansArray;

	}
};

	
	# interviewbit
	# track: "programming"
	# section: "math"
	# problem title: "Greatest Common Divisor"

class Solution:
	# @param A : integer
	# @param B : integer
	# @return an integer
	def gcd(self, A, B):
	    if(B>A):
	        A,B = B,A;
	    if(B==0):
	        return A;
	    rem = A%B;
	    if(rem==0):
	        return B;
	    else:
	        return self.gcd(B,rem);
	    

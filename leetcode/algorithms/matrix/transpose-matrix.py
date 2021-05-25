class Solution(object):
    def transpose(self,matrix):
        s = len(matrix);
        halfIndex = int(s/2);
        temp = 0;
        for i in range(s):
            for l in range(i,s):
                if(i!=l):
                    temp = matrix[i][l];
                    matrix[i][l] = matrix[l][i];
                    matrix[l][i] = temp
        return self;
    
    def horizontalReverse(self,matrix):
        for i in range(len(matrix)):
            matrix[i].reverse();
        return self;
    
    def rotate(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: None Do not return anything, modify matrix in-place instead.
        """
        #bit of a strange pattern, I know.
        self.transpose(matrix).horizontalReverse(matrix);
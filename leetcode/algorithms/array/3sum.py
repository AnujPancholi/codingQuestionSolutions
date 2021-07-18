class Solution(object):
    def threeSum(self, nums):
        target = 0;
        nums.sort();
        
        triplets = []
        
        i=0;
        
        while i<len(nums)-2:
            v = target - nums[i];
            x=i+1
            y=len(nums)-1;
            while(y-x>=1):
                if(nums[x]+nums[y]>v):
                    y=y-1;
                elif(nums[x]+nums[y]<v):
                    x=x+1;
                else:
                    triplets.append([nums[i],nums[x],nums[y]]);
                    while(x<len(nums)-2 and nums[x]==nums[x+1]):
                        x=x+1
                    x=x+1;
                    while(y>i and nums[y]==nums[y-1]):
                        y=y-1;
                    y=y-1;
            
            while(i<len(nums)-2 and nums[i]==nums[i+1]):
                i=i+1;
            i=i+1;
        
        return triplets;
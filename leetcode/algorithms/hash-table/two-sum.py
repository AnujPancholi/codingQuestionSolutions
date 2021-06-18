class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        result = None;
        compMap = defaultdict(lambda: None);
        
        for i in range(len(nums)):
            comp = target - nums[i];
            compMapResult = compMap[comp];
            if compMapResult!=None:
                result = [compMapResult,i];
            compMap[nums[i]] = i;
        return result;
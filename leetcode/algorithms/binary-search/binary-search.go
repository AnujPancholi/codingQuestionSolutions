func search(nums []int, target int) int {
    
    var low int = 0
    var high int = len(nums)-1
    
    var sol int = -1;
    for(high-low>1){
        var mid int = low + ((high - low) / 2)
        
        if(nums[mid]==target){
            sol = mid
            break
        } else if(nums[mid]>target){
            high = mid
        } else {
            low = mid
        }
    }
    
    if(nums[low]==target){
        sol = low
    } else if(nums[high]==target){
        sol = high
    }
    
    return sol
    
}
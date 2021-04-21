func peakIndexInMountainArray(arr []int) int {
    
    var low int16 = 0
    var high int16 = int16(len(arr))
    var sol int16
    for(high-low>1){
        var mid int16 = (high+low)/2
        if(arr[mid-1]<arr[mid] && arr[mid+1]<arr[mid]){
            sol = mid
            break
        } else if (arr[mid-1]>arr[mid]){
            high = mid
        } else {
            low = mid
        }
    }
    return int(sol)
    
}
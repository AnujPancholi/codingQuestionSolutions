if __name__ == '__main__':
    x = int(raw_input())
    y = int(raw_input())
    z = int(raw_input())
    n = int(raw_input())
    
    list3d = [[a,b,c] for a in range(0,x+1) for b in range(0,y+1) for c in range(0,z+1)]
    
    def checkForSum(arr):
        if (arr[0]+arr[1]+arr[2])==n:
            return False
        else:
            return True
    
    filteredList = filter(checkForSum,list3d)
    
    print(filteredList)
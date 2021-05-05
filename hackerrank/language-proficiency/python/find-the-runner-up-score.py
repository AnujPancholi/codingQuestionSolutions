import heapq

def getNegativeInt(x):
    return -1*int(x);

if __name__ == '__main__':
    n = int(input())
    arr = map(getNegativeInt, input().split())
    
    numList = list(arr)
    
    heapq.heapify(numList);
    
    winner = heapq.heappop(numList)
    runnerup = heapq.heappop(numList)
    
    while runnerup==winner:
        runnerup = heapq.heappop(numList)
    
    print(-1*runnerup)
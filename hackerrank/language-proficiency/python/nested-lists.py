import heapq;

if __name__ == '__main__':
    heapList = []
    heapq.heapify(heapList)
    for _ in range(int(input())):
        name = input()
        score = float(input())
        heapq.heappush(heapList,(score,name))
    
    lowestScoreTuple = heapq.heappop(heapList)
    nextScoreTuple = heapq.heappop(heapList)
    
    while(len(heapList)>0 and nextScoreTuple[0]==lowestScoreTuple[0]):
        nextScoreTuple = heapq.heappop(heapList)
    
    # nameList = [nextScoreTuple[1]];
    print(nextScoreTuple[1]);
    secondMinScore = nextScoreTuple[0]
    
    while(len(heapList)>0 and nextScoreTuple[0]==secondMinScore):
        nextScoreTuple = heapq.heappop(heapList)
        if(nextScoreTuple[0]==secondMinScore):
            # nameList.append(nextScoreTuple[1])
            print(nextScoreTuple[1])
if __name__ == '__main__':
    n = int(raw_input())
    arr = map(int, raw_input().split())
    winner=arr[0]
    runnerup=arr[0]
    for score in arr[1:]:
        if score>winner:
            runnerup=winner
            winner=score
        if score<winner and (score>runnerup or runnerup==winner):
            runnerup=score
            
    print(runnerup)
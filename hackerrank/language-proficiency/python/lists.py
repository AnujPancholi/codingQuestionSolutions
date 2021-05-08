if __name__ == '__main__':
    N = int(raw_input())
    
    def insert(li,v,i):
        li.insert(v,i)
    def append(li,v,i):
        li.append(v)
    def pop(li,v,i):
        li.pop()
    def remove(li,v,i):
        li.remove(v)
    def sort(li,v,i):
        li.sort()
    def printList(li,v,i):
        print(li)
    def reverse(li,v,i):
        li.reverse()
    
    operations = {
        "print": printList,
        "insert": insert,
        "append": append,
        "pop": pop,
        "remove": remove,
        "sort": sort,
        "reverse": reverse
    }
    li = []
    for commandIndex in range(N):
        params = raw_input().split(' ')
        while(len(params)<3):
            params.append(0)
        # print(params)
        operations[params[0]](li,int(params[1]),int(params[2]))
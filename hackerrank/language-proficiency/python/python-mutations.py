
def mutate_string(string, position, character):
    strList = list(string)
    strList[position] = character;
    return "".join(strList)

if __name__ == '__main__':
    s = input()
    i, c = input().split()
    s_new = mutate_string(s, int(i), c)
    print(s_new)
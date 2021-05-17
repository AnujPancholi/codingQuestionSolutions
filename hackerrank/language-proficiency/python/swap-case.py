def swapCaseForCharVal(v):
    if v>=97 and v<=122:
        v=v-32
    elif v>=65 and v<=90:
        v=v+32
    return chr(v)
def swap_case(s):
    return "".join([swapCaseForCharVal(ord(ch)) for ch in s])

if __name__ == '__main__':
    s = input()
    result = swap_case(s)
    print(result)
# Enter your code here. Read input from STDIN. Print output to STDOUT

import re

lineCount = int(raw_input())

lines = [None]*lineCount
for i in range(lineCount):
    lines[i] = str(raw_input())
#print(lines)

for line in lines:
    while(" && " in line):
        line = re.sub(r" \&\& "," and ",line)
    while(" || " in line):
        line = re.sub(r" \|\| "," or ",line)
    print(line)
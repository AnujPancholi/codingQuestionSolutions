#
# Complete the 'print_full_name' function below.
#
# The function is expected to return a STRING.
# The function accepts following parameters:
#  1. STRING first
#  2. STRING last
#

from string import Template

def getStringFromTemplate(templateObj,varDict):
    return templateObj.substitute(varDict)

FULLNAME_TEMPLATE = Template('Hello $first $last! You just delved into python.');
def print_full_name(first, last):
    # Write your code here
    print(getStringFromTemplate(FULLNAME_TEMPLATE,{'first': first, 'last': last}))

if __name__ == '__main__':
    first_name = input()
    last_name = input()
    print_full_name(first_name, last_name)
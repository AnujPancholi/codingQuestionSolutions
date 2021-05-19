import functools

if __name__ == '__main__':
    s = input()
    charlist = list(s)
    
    print(functools.reduce(lambda a,b : (a if type(a)==bool else a.isalnum()) or b.isalnum(),charlist))
    print(functools.reduce(lambda a,b : (a if type(a)==bool else a.isalpha()) or b.isalpha(),charlist))
    print(functools.reduce(lambda a,b : (a if type(a)==bool else a.isdigit()) or b.isdigit(),charlist))
    print(functools.reduce(lambda a,b : (a if type(a)==bool else a.islower()) or b.islower(), charlist))
    print(functools.reduce(lambda a,b : (a if type(a)==bool else a.isupper()) or b.isupper(),charlist))
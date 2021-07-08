def solution(numbers):
    from functools import cmp_to_key
    
    data = [str(i) for i in numbers]
    data = sorted(data, key=cmp_to_key(sor))
    
    if set(data) == {'0'}:
        return "0"
    
    return ''.join(data)

def sor(a, b):
    if a+b > b+a:
        return -1
    return 1
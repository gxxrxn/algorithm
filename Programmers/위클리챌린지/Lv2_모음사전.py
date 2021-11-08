from itertools import product

def solution(word):
    answer = []
    
    for i in range(5):
        for c in product(['A', 'E', 'I', 'O', 'U'], repeat=i+1):
            answer.append(''.join(c))
    
    answer = sorted(answer)
    return answer.index(word)+1
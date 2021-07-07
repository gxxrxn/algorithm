def solution(clothes):
    data = {}
    ans = 1
    for cloth in clothes:
        if cloth[1] not in data:
            data[cloth[1]] = 0
        data[cloth[1]] += 1
    for v in [i+1 for i in list(data.values())]:
        ans *= v
    return ans-1
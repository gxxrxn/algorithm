def solution(answers):
    l = len(answers)
    
    s1 = [1, 2, 3, 4, 5]
    s2 = [2, 1, 2, 3, 2, 4, 2, 5] 
    s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    answer = [s1*(l//5) + s1[:l%5], s2*(l//8) + s2[:l%8], s3*(l//10) + s3[:l%10]]
    cnt = [0, 0, 0]

    for i in range(l):
        for a in range(len(answer)):
            if answer[a][i] == answers[i]:
                cnt[a] += 1
    result = []
    mx = max(cnt)
    for i in range(3):
        if cnt[i] == mx:
            result += [(i+1)]
    
    return result
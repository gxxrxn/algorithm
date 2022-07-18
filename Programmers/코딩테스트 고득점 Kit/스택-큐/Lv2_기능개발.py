def solution(progresses, speeds):
    answer = {}
    f_days = []
    
    for p, s in zip(progresses, speeds):
        d = (100-p)//s
        r = (100-p)%s
        if r != 0:
            d += 1
        f_days.append(d)
        
    day = f_days[0]
    
    for f in f_days:
        if day >= f:
            if day not in answer:
                answer[day] = 0
            answer[day] += 1
        else:
            day = f
            answer[day] = 1
    
    return list(answer.values())
def solution(citations):
    answer = 0
    citations.sort(reverse=True)
    print(citations)
    for i in range(len(citations)):
        if i+1 >= citations[i]:
            answer = citations[i]
            break
            
    return answer
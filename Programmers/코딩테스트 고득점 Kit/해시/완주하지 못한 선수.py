def solution(participant, completion):
    answer = {}
    for p in participant:
        if p not in answer:
            answer[p] = 0
        if p in answer:
            answer[p] += 1
    for p in completion:
        answer[p] -= 1
    for p in participant:
        if answer[p] == 1:
            return p
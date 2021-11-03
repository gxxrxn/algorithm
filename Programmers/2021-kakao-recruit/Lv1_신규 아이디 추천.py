import re

def solution(new_id):
    allow = '-_.'
    answer = ''
    # 1단계, 2단계
    for s in new_id:
        if s.isalpha():
            answer += s.lower()
        if s.isdigit():
            answer += s
        if s in allow:
            answer += s
    answer = re.sub('\.{2,}', '.', answer) # 3단계
    answer = re.sub('^\.|\.$', '', answer) # 4단계
    # 5단계
    if answer == '':
        answer = 'a'
    # 6단계
    if len(answer) >= 16:
        answer = answer[:15]
        answer = re.sub('\.$', '', answer)
    # 7단계
    if len(answer) <= 2:
        answer += answer[-1]*3
        answer = answer[:3]
    
    return answer
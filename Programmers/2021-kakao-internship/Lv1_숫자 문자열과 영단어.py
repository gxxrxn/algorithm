def solution(s):
    answer = ''
    char = {'zero':'0', 'one':'1', 'two':'2', 'three':'3', 'four':'4', 'five':'5', 'six':'6', 'seven':'7', 'eight':'8', 'nine':'9'}
    i = 0
    tmp = ''
    while i < len(s):
        tmp += s[i]
        if tmp in '0123456789':
            answer += tmp
            tmp = ''
        elif tmp in char:
            answer += char[tmp]
            tmp = ''
        i += 1
    return int(answer) 
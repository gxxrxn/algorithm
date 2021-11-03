def replaceSharp(m):
    sharp = {'C#':'c', 'D#':'d', 'E#':'e', 'F#':'f', 'G#':'g', 'A#':'a'}
    s = []
    for i in range(len(m)-1):
        if m[i+1] == '#':
            s.append(sharp[m[i:i+2]])
        elif m[i] != '#':
            s.append(m[i])
    if m[i+1] != '#':
        s.append(m[i+1])
    return ''.join(s)

def convert(t):
    h, m = t.split(':')
    return int(h)*60 + int(m)

def solution(m, musicinfos):
    answer = {}
    m = replaceSharp(m)
    
    for info in musicinfos:
        start, end, title, melody = info.split(',')
        start, end, melody = convert(start), convert(end), replaceSharp(melody)
        mm, n = end-start, len(melody)
        melody = melody * (mm//n) + melody[:mm%n]
        answer[title] = melody
    
    t_ = m_ = ''
    for title, melody in answer.items():
        if (m in melody) and (len(m_) < len(melody)):
            t_, m_ = title, melody
    return '(None)' if len(t_)==0 else t_
def solution(record):
    message = {'Enter': '님이 들어왔습니다.', 'Leave': '님이 나갔습니다.'}
    info = {}
    answer = []
    
    for m in record:
        m_list = m.split(" ")
        word = m_list[0]
        uid = m_list[1]
        
        if word == 'Enter' or word == 'Change':
            name = m_list[2]
            info[uid] = name
        if word == 'Enter' or word == 'Leave':
            answer.append([uid, message[word]])
    
    return [''.join([info[m[0]], m[1]]) for m in answer]
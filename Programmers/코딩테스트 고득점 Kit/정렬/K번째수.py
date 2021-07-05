def solution(array, commands):
    answer = []
    for c in commands:
        arr = array[c[0]-1:c[1]]
        if len(arr) == 1:
            answer.append(arr[0])
        else:
            arr.sort()
            answer.append(arr[c[2]-1])
    return answer
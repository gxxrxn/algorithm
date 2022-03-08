keys = [['q','w','e','r','t','y','u','i','o','p'], ['a','s','d','f','g','h','j','k','l'], ['z','x','c','v','b','n','m']]
keysL = ['q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v']
pos = {}

for r in range(len(keys)):
    for i in range(len(keys[r])):
        key = keys[r][i]
        pos[key] = [r, i]

sL, sR = input().split()
string = input()
answer = 0

curL, curR = pos[sL], pos[sR]
for char in string:
    curKey = pos[char]
    if char in keysL:
        answer += sum([abs(i-j) for i, j in zip(curL, curKey)])
        curL = curKey
    else:
        answer += sum([abs(i-j) for i, j in zip(curR, curKey)])
        curR = curKey
    answer += 1

print(answer)

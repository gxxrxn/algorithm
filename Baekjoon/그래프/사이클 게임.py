import sys

def find(x):
    if x == parents[x]:
        return x
    parents[x] = find(parents[x])
    return parents[x]

def union(n1, n2):
    n1 = find(n1)
    n2 = find(n2)

    if n1 < n2: # 일반적으로 노드 번호가 작은 쪽으로 합침.
        parents[n2] = n1
    else:
        parents[n1] = n2

n, m = map(int, input().split())
parents = [i for i in range(n)]
edges = [tuple(map(int, input().split())) for _ in range(m)]
found = False

for idx, edge in enumerate(edges):  
    print(parents)  
    if find(edge[0]) != find(edge[1]):
        union(edge[0], edge[1])
    else:
        found = True
        print(idx+1)
        break

if found == False:
    print(0)
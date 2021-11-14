N, M, V = map(int, input().split())
matrix = [[0]*(N+1) for i in range(N+1)]
visited = [0]*(N+1)

for i in range(M):
    a, b = map(int, input().split())
    matrix[a][b] = 1
    matrix[b][a] = 1

def dfs(V):
    visited[V] = 1 # 방문했으면 1
    print(V, end=' ')
    for i in range(1, N+1):
        if (visited[i]==0 and matrix[V][i]==1):
            dfs(i)
    print()

def bfs(V):
    visited[V] = 1 # 방문했으면 1
    queue = [V]
    while queue:
        V = queue.pop(0)
        print(V, end=' ')
        for i in range(1, N+1):
            if (visited[i]==0 and matrix[V][i]==1):
                queue.append(i)
                visited[i] = 1
    print()

dfs(V)
visited = [0]*(N+1)
bfs(V)
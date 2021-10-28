def solution(places):
    answer = []
    size = 5
    
    def valid(r, c):
        return -1<r<size and -1<c<size
    
    def check(x, y, place):
        # 5x5 대기실 안에서 상하좌우로 사람이 있는 경우
        dist = [(1,0),(0,1),(-1,0),(0,-1)]
        for dx, dy in dist:
            nx, ny = x+dx, y+dy
            if valid(nx, ny) and place[nx][ny]=='P':
                return False
        
        # 5x5 대기실 안에서 직선상이 아니면서 거리가 2인 위치에 사람이 있는데 사이에 둘 중 하나라도 파티션이 없는 경우
        dist = [(-1,-1),(-1,1),(1,-1),(1,1)]
        for dx, dy in dist:
            nx, ny = x+dx, y+dy
            if valid(nx, ny) and place[nx][ny]=='P' and (place[x][ny]!='X' or place[nx][y]!='X'):
                return False
        
        # 5x5 대기실 안에서 직선상 거리가 2인 위치에 사람이 있는데 그 사이에 파티션이 없는 경우
        dist = [(2,0), (0,2), (-2,0), (0,-2)]
        for dx, dy in dist:
            nx, ny = x+dx, y+dy
            if valid(nx, ny) and place[nx][ny] =='P' and place[x+dx//2][y+dy//2] !='X':
                return False
        
        # 다른 경우는 거리두기를 지켰다!
        return True
    
    for place in places:
        flag = False
        for r, c in [(i, j) for i in range(5) for j in range(5)]:
            # 한 대기실 안에서 한 사람이라도 맨해튼 거리 2 이하에서 거리두기를 안지켯으면
            if place[r][c] == 'P' and not check(r, c, place):
                answer.append(0)
                flag = True
                break
        if not flag:
            answer.append(1)
        
    return answer
def solution(n, lost, reserve):
    cnt = [1] * n
    ans = 0
    
    for r_std in reserve:
        cnt[r_std-1] += 1
    for l_std in lost:
        cnt[l_std-1] -= 1
    
    for i in range(n):
        if cnt[i] == 0: 
            if i != n-1 and cnt[i+1] == 2:
                cnt[i] += 1
                cnt[i+1] -= 1
            if i != 0 and cnt[i-1] == 2:
                cnt[i] += 1
                cnt[i-1] -= 1
            
        if cnt[i] >= 1:
            ans += 1
    
    return ans
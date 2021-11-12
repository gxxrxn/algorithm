def solution(price, money, count):
    need = 0
    cnt = count
    for i in range(count):
        need += price*cnt
        cnt -= 1
    return 0 if need - money <= 0 else need - money
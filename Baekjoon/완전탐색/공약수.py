def gcd(a, b):
    if a == 0:
        return b
    return gcd(b % a, a)

n = int(input())
li = list(map(int, input().split()))

g = gcd(li[0], gcd(li[1], li[-1]))

for i in range(1, (g // 2) + 1):
    if g % i == 0:
        print(i)

print(g)

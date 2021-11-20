num = int(input())
answer = 0

for i in range(1, num+1):
    nums = list(map(int, str(i)))
    answer = i + sum(nums)
    
    if answer == num:
        print(i)
        break

    if i == num:
        print(0)
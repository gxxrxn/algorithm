import itertools

def solution(orders, course):
    answer = []

    for n in course:
        dic = {}
        for order in orders:
            if len(order) >= n:
                order = sorted(list(order))
                combis = list(map(''.join, itertools.combinations(order, n)))
                for combi in combis:
                    if combi not in dic:
                        dic[combi] = 1
                    else:
                        dic[combi] += 1

        sorted_dict = dict(sorted(dic.items(), key = lambda x: x[1], reverse=True))

        max_cnt = -1
        for i, k in enumerate(sorted_dict):
            if i == 0:
                max_cnt = dic[k]
            if dic[k] == max_cnt and max_cnt >= 2:
                answer.append(k)
            else:
                break

    return sorted(answer)
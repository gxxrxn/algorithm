import re
import math

def solution(str1, str2):
    answer = 0
    
    str1 = [str1[i:i+2].lower() for i in range(len(str1)-1) if not re.findall('[^a-zA-Z]+', str1[i:i+2])]
    str2 = [str2[i:i+2].lower() for i in range(len(str2)-1) if not re.findall('[^a-zA-Z]+', str2[i:i+2])]
    
    gyo = set(str1) & set(str2)
    hap = set(str1) | set(str2)
    
    if len(hap) == 0:
        return 65536
    
    i = sum([min(str1.count(el), str2.count(el)) for el in gyo])
    u = sum([max(str1.count(el), str2.count(el)) for el in hap])

    return (i/u)*65536//1
def solution(clothes):
    answer = 1
    c={}
    
    for i in clothes:
        c[i[1]]= c.get(i[1],0)+1
    
    for k,v in c.items():
        answer*= v+1
    answer-=1
            
    return answer
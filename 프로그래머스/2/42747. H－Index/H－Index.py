def solution(citations):
    answer = 0
    l = len(citations)
    citations.sort()
    
    for i in range(l):
        h = citations[i]
        m = 0
        for j in range(h+1):
            if(l-i>=j):
                m=j
        if(answer<m):
            answer=m

    return answer
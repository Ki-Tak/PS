def solution(sizes):    
    m1 = 0
    m2 = 0
    for i in sizes:
        l = max(i[0],i[1])
        s = min(i[0],i[1])
        
        if(m1<l):
            m1=l
        if(m2<s):
            m2=s
    return m1*m2
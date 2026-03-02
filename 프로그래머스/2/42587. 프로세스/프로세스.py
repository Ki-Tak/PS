def solution(priorities, location):
    answer = 0
    src = [(k, v) for k, v in enumerate(priorities)]
    dst = []
    t = 0
    
    print(src)
    
    while src:
        sl = len(src)
        t %= sl
        
        b = t
        for k in range(1,sl):
            i = (t + k) % sl
            if(src[i][1]>src[b][1]):
                b = i
    
        dst.append(src.pop(b))
        t = b
    
    for i in range(len(dst)):
        if(dst[i][0]==location):
            answer = i + 1
            
    return answer
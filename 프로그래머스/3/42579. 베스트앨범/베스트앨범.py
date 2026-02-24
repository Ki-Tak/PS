def solution(genres, plays):
    answer = []
    genres_set = set(genres)
    l = len(genres)
    g = {}
    
    for i in range (l):
        g[genres[i]] = g.get(genres[i],0) + plays[i]
        
    sortedG = dict(sorted(g.items(), key=lambda key:key[1], reverse=True))
    
    print(sortedG)
    
    for i in sortedG:
        p = {}
        for j in range(l):
            if(i == genres[j]):
                p[j]= p.get(j,0) + plays[j]
        sortedP = dict(sorted(p.items(), key=lambda key:key[1], reverse=True))
        cnt = 0
        for k,v in sortedP.items():
            if(cnt<2):
                answer.append(k)
                cnt+=1
                
            
        
    
    return answer
def solution(participant, completion):
    answer = ''
    c = {}

    for i in completion:
        c[i] = c.get(i,0)+1
    
    for i in participant:
        if(i in c and c.get(i)>0):
            c.update({i:(c.get(i)-1)})
        else:
            answer = i

    return answer
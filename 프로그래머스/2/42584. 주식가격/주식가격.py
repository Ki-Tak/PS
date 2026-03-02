def solution(prices):
    answer = []
    l = len(prices)
    
    for i in range(l):
        for j in range(i+1,l):
            if(prices[i]>prices[j]):
                answer.append(j-i)
                break
        if(len(answer)!=i+1):
            answer.append(j-i)
    return answer
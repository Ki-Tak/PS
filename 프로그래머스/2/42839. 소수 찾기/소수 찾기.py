import math
def solution(numbers):
    answer = 0
    l = len(numbers)
    numList = list(numbers)
    numSet = set()
    visited = [False] * l
    
    def dfs(s):
        if(s):
            numSet.add(int(s))
        for i in range(l):
            if not visited[i]:
                visited[i] = True
                dfs(s+numList[i])
                visited[i] = False
    dfs("")
    
    def is_prime(n):
        if n < 2:
            return False
        for i in range(2,int(math.sqrt(n))+1):
            if(n%i==0):
                return False
        return True
    
    for i in numSet:
        if(is_prime(i)):
            answer+=1

    return answer
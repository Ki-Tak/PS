def solution(brown, yellow):
    answer = []
    for i in range(1, brown+1):
        for j in range(1, brown+1):
            if(i*j==brown+yellow and (j-2)*(i-2)== yellow and (j*2+2*i-4)==brown):
                return [j,i]
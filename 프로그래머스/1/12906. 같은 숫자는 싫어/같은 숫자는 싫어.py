def solution(arr):
    answer = []
    for i in range(len(arr)):
        if(i==0):
            answer.append(arr[i])
        else:
            if(prev!=arr[i]):
                answer.append(arr[i])
        prev=arr[i]
            
    return answer
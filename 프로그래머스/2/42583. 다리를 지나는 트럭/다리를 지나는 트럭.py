from collections import deque
def solution(bridge_length, weight, truck_weights):
    answer = 0
    w = deque(truck_weights)
    b = deque([0]*bridge_length)
    s_w = 0
        
    while w or s_w>0:
        answer += 1
        
        s_w -= b.popleft()
        
        if(w and w[0]+s_w<=weight):
            truck = w.popleft()
            b.append(truck)
            s_w += truck
        else:
            b.append(0)
        
        
    return answer
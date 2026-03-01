import math 

def solution(progresses, speeds):
    answer = []
    l = len(speeds)
    dayList = []
    
    for i in range(l):
        day = math.ceil((100 - progresses[i]) / speeds[i])
        dayList.append(day)
    print(dayList)
    
    m = dayList[0]
    t = [dayList[0]]
    
    for i in range(1,l):
        if(m>=dayList[i]):
            t.append(dayList[i])
        else:
            m = dayList[i]
            answer.append(len(t))
            t = [dayList[i]]
            
    answer.append(len(t))
                
            
        
        
    return answer
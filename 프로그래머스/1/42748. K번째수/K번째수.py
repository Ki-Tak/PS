def solution(array, commands):
    answer = []
    for i in commands:
        t = array[i[0]-1:i[1]]
        t.sort()
        answer.append(t[i[2]-1])
    return answer
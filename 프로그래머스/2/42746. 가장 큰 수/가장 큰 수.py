def solution(numbers):
    answer = ''
    strarr = []
    for i in numbers:
        strarr.append(str(i))
    
    strarr.sort(key=lambda x:x*4, reverse=True)

    for i in strarr:
        answer += i

    return str(int(answer))
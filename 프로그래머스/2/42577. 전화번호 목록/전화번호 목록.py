def solution(phone_book):
    answer = True
    s=set(phone_book)
    
    for i in phone_book:
        l = len(i)
        for j in range(l):
            if(i[0:j] in s):
                return False
            
    return answer
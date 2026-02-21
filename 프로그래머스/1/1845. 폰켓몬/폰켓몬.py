def solution(nums):
    answer = 0
    pokemon = set(nums)
    
    if(len(pokemon) > len(nums)/2):
        return len(nums)/2
    else:
        return len(pokemon)

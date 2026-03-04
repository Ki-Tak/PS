def solution(answers):
    pattern = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]
    
    score = [0, 0, 0]
    
    for i, answer in enumerate(answers):
        for s_i, p in enumerate(pattern):
            if answer == p[i % len(p)]:
                score[s_i] += 1
                
    m = max(score)
    
    return [i + 1 for i, score in enumerate(score) if score == m]
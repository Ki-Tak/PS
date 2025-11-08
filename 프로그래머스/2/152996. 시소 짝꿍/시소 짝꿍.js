function solution(weights) {
    var answer = 0;
    const weightMap = new Map()
    
    for(const weight of weights){
        weightMap.set(weight,(weightMap.get(weight)||0) +1)
    }
    // 2:2 2:3 2:4 3:4
    // 1:1 2:3 1:2 3:4
    for(const[weight,count]of weightMap){
        if(count>1){
            answer+=Number(count*(count-1)/2)
        }
        if(weightMap.get(weight*2/3)){
            answer+=Number(count*weightMap.get(weight*2/3))
        }
        if(weightMap.get(weight*2)){
            answer+=Number(count*weightMap.get(weight*2))
        }
        if(weightMap.get(weight*3/4)){
            answer+=Number(count*weightMap.get(weight*3/4))
        }
        
    }
    return answer;
}
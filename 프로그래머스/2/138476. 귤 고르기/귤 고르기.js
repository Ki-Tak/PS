function solution(k, tangerine) {
    var answer = 0;
    const tangerineMap = new Map()
    
    tangerine.forEach((tang)=>{
        if(tangerineMap.has(tang)){
            tangerineMap.set(tang,tangerineMap.get(tang)+1)
        }
        else{
            tangerineMap.set(tang,1)
        }
    })
    
    const tangerineArray= [...tangerineMap]
    
    tangerineArray.sort((a,b)=>b[1]-a[1])
    
    const sortedMap= new Map(tangerineArray)
    
    let sum=0
    
    for(const [key,value] of sortedMap){
        answer++
        sum+=value
        if(sum>=k){
            break
        }
    }
    
    return answer;
}
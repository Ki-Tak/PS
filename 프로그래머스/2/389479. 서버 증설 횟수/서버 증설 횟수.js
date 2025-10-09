function solution(players, m, k) {
    var answer = 0;
    let n= Array(24).fill(0)

    for(let i=0;i<players.length;i++){
        if(players[i]>=(n[i]+1)*m){
            
            let plusNum= Math.floor(players[i]/m)-n[i]
            answer+=plusNum
    
            for(let j=i;j<i+k;j++){
                
                if(j<players.length){
                    n[j]+=plusNum
                }
                
            }
        }
    }
    return answer;
}
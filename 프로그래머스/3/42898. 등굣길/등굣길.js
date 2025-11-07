function solution(m, n, puddles) {
    let dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));
    let puddleSet = new Set()
    
    puddles.forEach((puddle)=>{
        puddleSet.add(`${puddle[0]},${puddle[1]}`)
    })
    
    dp[1][1]=1
    
    for(let i=1;i<=n;i++){
        for(let j=1;j<=m;j++){
            if(i === 1 && j === 1){
                continue
            }
            
            if(puddleSet.has(`${j},${i}`)){
                dp[i][j]=0
                continue
            }
            
            dp[i][j] = (dp[i-1][j]+dp[i][j-1]) % 1_000_000_007
        }
    }
    return dp[n][m];
}
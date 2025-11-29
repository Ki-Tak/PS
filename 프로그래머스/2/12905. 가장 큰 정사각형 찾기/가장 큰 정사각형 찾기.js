function find(dp,i,j,rowLength,colLength){
    if(i===0||j===0){
        return 1
    }
    return Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])+1
}
function solution(board)
{   
    const colLength = board.length
    const rowLength = board[0].length
    const dp = Array.from({ length: colLength }, () => Array(rowLength).fill(0));
    
    let max = 0;
    
    for(let i=0;i<colLength;i++){
        for(let j=0;j<rowLength;j++){
            if(board[i][j]===1){
                dp[i][j]=find(dp,i,j,rowLength,colLength)
                if(max<dp[i][j]){
                    max=dp[i][j]
                }
            }
        }
    }
    return max*max
}
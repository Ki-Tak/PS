function solution(n, w, num) {
    let answer=0
    const targetCol = parseInt((num-1)/w+1)
    const targetRow = parseInt(targetCol%2===0?w-(num-1)%w:(num-1)%w+1)
    for(let i=num;i<=n;i++){
        const col = parseInt((i-1)/w+1)
        const row = parseInt(col%2===0?w-(i-1)%w:(i-1)%w+1)
        if(targetRow===row){
            answer++
        }
    }
    return answer
}
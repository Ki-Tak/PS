function solution(n, q, ans) {
    var answer = 0;
  
    const current=[]
    const combination=[]
    function backtrack(start){
        if(current.length===5){
            combination.push([...current])
            return
        }
        for(let i=start;i<=n;i++){
            current.push(i)
            backtrack(i+1)
            current.pop()
        }
    }
    backtrack(1)
    
  
    for(let i=0;i<combination.length;i++){
      let count=0
      for(let j=0;j<ans.length;j++){
          const question=q[j]
          let rightNumCnt= question.filter(num=>combination[i].includes(num)).length
          
          if(rightNumCnt===ans[j]){
              count++
          }
      }
        if(count===ans.length){
            answer++
        }
    }
    
    return answer;
}
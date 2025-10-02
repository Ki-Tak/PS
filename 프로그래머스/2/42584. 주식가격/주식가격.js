function solution(prices) {
    const n=prices.length
    var answer = new Array(n).fill(0);
    const stack=[]
    
    for(let i=0;i<n;i++){
        while(stack.length>0&&prices[i]<prices[stack[stack.length-1]]){
            const prevIdx=stack.pop();
            answer[prevIdx]=i-prevIdx
        }
        stack.push(i)
    }
    
    while(stack.length>0){
        const prevIdx=stack.pop();
        answer[prevIdx]= n-1-prevIdx
    }
    
    return answer;
}
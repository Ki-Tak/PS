function solution(t, p) {
    var answer = 0;
    t=t.split('')
    
    for(let i=p.length-1;i<t.length;i++){
        const numberArr=[]
        for(let j=p.length-1;j>=0;j--){
            numberArr.push(t[i-j])
        }
        if(parseInt(p)>=parseInt(numberArr.join(''))){
            answer++
        }
    }
    
    return answer;
}
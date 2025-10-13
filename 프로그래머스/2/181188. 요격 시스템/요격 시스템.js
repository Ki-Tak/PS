function solution(targets) {
    var answer = 0;
    
    let prev=-Infinity
    targets.sort((a,b)=>a[1]-b[1])
    
    for(let i=0;i<targets.length;i++){
        let st=targets[i][0]
        let ed=targets[i][1]
        
        if(prev<=st){
            prev=ed
            answer+=1
        }
    }
    return answer;
}
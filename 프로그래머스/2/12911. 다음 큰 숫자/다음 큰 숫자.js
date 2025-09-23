
function solution(n) {
    var answer = n;
    
    let count=n.toString(2).split('').filter((a)=>a==='1').length
    
    while(true){
        answer+=1
        if(count===answer.toString(2).split('').filter((a)=>a==='1').length){
            break
        }
    }
 
    return answer;
}


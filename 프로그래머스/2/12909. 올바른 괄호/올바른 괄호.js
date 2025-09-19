function solution(s){
    let answer = true;

    let open=0;
    let close=0;
    
    s.split('').map((a)=>{
        
        if(a === '(' ){
            open += 1
        }
        else if(a === ')' ){
            close += 1
        }
        
        if(close > open){
            answer = false
        }
    })
    
    if(open !== close){
        answer = false
    }
    
    return answer
}
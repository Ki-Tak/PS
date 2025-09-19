function solution(s){
    var answer = true;

    let open=0;
    let close=0;
    let idx=0
    
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
        
        idx+=1
    })
    
    console.log(answer)
    
    if(open === close){
        return answer
    }
    else{
        return false
    }
}
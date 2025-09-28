function solution(s) {
    var answer = 0;
    
    s = s.split('')
    
    for(let i=0;i<s.length;i++){
        let stack=[]
        
        s.push(s.shift())
        
        let isRight=true
        
        for(const char of s){
            if(char==='('||char==='{'||char==='['){
                stack.push(char)
            } else{
                if(stack.length===0){
                    isRight=false
                    break
                }
                const last = stack.pop()
                if(!((last==='('&&char===')') ||
                    (last==='{'&&char==='}') ||
                   (last==='['&&char===']')
                )){
                   isRight=false
                    break
                }
            }
        }
        if(isRight&&stack.length===0){
            answer+=1
        }
    }
    
    return answer;
}
function solution(s) {
    var answer = '';
    
    s.split(' ').map((str,idx)=>{
        if(str.trim()){
        str.split('').map((s,i)=>{
            if(i===0){
                if(idx!==0){
                    answer+=" "
                }
                answer+= s.toUpperCase()
            }
            else{
                answer+= s.toLowerCase()
            }
        })
        }
        else{
            answer+= " "
        }
    })
    return answer;
}
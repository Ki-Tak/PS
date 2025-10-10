function solution(sequence, k) {
    var answer = [];
    
    let sum=0
    let st=0

    let minLen=Infinity
    
    for(let ed=0;ed<sequence.length;ed++){
        sum += sequence[ed]
     
        while(sum>k){
            sum-=sequence[st++]
        }
        
        if(sum===k&&(ed-st+1)<minLen){
            answer=[st,ed]
            minLen=ed-st+1
        }
    }
   
    return answer;
}
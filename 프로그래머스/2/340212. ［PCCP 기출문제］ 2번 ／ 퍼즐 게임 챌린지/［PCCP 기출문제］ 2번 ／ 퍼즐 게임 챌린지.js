function solution(diffs, times, limit) {
    let min =1
    let max =100000
    
    let prev=0
    
    while (min<=max){
        const level = Math.floor((max+min)/2)
        let sum=0
        for(let j=0;j<diffs.length;j++){
            sum+=times[j]
            if(diffs[j]>level){
                sum+=((times[j]+times[j-1])*(diffs[j]-level))
            }
        }
        if(sum>limit){
            min=level+1
           }
        else{
            prev=level
            max=level-1
        }
    }
    return prev  
   
}

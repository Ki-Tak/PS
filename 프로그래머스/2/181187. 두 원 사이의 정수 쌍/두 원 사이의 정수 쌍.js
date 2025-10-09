function solution(r1, r2) {
    var answer = 0;
    
    for(let x=1;x<=r2;x++){
        let maxY= Math.floor(Math.sqrt(r2*r2-x*x))
        let minY= x<r1? Math.ceil(Math.sqrt(r1*r1-x*x)):0
        
        answer+= maxY-minY+1
    }
    
    answer*=4
    return answer
}
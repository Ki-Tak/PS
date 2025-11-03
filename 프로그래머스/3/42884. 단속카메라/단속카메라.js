function solution(routes) {
    var answer = 0;
    
    routes.sort((a,b)=>a[1]-b[1])
    let prev=-Infinity
    
    routes.forEach((route)=>{
        if(prev<route[0]){
            answer++
            prev=route[1]
        }
    })
    
    return answer;
}
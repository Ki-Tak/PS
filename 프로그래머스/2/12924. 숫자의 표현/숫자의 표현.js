function solution(n) {
    var answer = 0;
    let sum=0
    for (let i =1;i<=n;i++){
        sum+=i
        if(sum>n){
            break
        }
        if(i%2===0){
            if(n%i===i/2){
                answer +=1
            }
        }
        else{
            if(n%i===0){
                answer +=1 
            }
        }
    }
    return answer;
}
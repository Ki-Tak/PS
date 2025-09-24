function solution(arr) {
    var answer = 0;
    while(true){
        answer+=1
        let cnt=0
        for(let i=0;i<arr.length;i++){
            if(answer%arr[i]===0){
                cnt+=1
            }
        }
        if(cnt===arr.length){
            break
        }
    }
    return answer;
}
function solution(a, b, n) {
    var answer = 0;
    while (Math.floor(n/a)!==0){
        let temp= n%a
        n=Math.floor(n/a)*b
        answer+=n
        n+=temp
    }
    return answer;
}
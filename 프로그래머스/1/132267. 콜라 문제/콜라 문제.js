function solution(a, b, n) {
    var answer = 0;
    while (Math.floor(n/a)!==0){
        answer += Math.floor(n/a)*b;
        n= Math.floor(n/a)*b +n%a 
    }
    return answer;
}
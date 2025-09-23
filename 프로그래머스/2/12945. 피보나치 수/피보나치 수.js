function solution(n) {
    var answer = 0;
    let fibo=[]
    fibo.push(0)
    fibo.push(1)
    for(let i=2;i<=n;i++){
        fibo.push((fibo[i-2]+fibo[i-1])%1234567)
    }
    return fibo[n]%1234567;

}
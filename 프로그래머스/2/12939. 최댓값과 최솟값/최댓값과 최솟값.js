function solution(s) {
    var answer = '';
    let max = -Infinity
    let min = Infinity 
    
    s.split(' ').map((i)=>{
        const num = Number(i);
        
        if (max < num) {
            max = num;
        }
        if (min > num) {
            min = num;
        }
    })
    answer+= min + ' ' + max
    return answer;
}
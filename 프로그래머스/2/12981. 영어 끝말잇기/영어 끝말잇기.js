function solution(n, words) {
    var answer = [];

    const wcg= new Map()
    let last= words[0].split('')[words[0].length-1]
    wcg.set(words[0],true)
    
    for(let i=1;i<words.length;i++){
        if(wcg.has(words[i]) || last!==words[i].split('')[0]){
            answer.push((i+1)%n===0? n : (i+1)%n)
            answer.push((i+1)%n===0? parseInt((i+1)/n) : parseInt((i+1)/n)+1)
            return answer
        }
        else{
            wcg.set(words[i],true)
        }
        last=words[i].split('')[words[i].length-1]
    }
    
    answer.push(0,0)
    return answer;
}
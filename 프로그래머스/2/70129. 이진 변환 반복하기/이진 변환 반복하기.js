function solution(s) {
    var answer = [];
    let binaryCount=0
    let zeroNum=0
    
    while (true){
        let total= s.length
        s= s.split('').filter(num=> num==='1').join('')
     
        zeroNum+= total-s.length
        binaryCount+=1
        
        s= s.length.toString(2)
        if(s==='1'){
            break
        }
    }
    answer.push(binaryCount)
    answer.push(zeroNum)
    return answer;
}
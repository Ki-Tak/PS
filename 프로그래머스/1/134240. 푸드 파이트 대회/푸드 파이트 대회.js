function solution(food) {
    var answer = '';
    const left=[]
    const right=[]
    for(let i=1;i<food.length;i++){
        const count = parseInt(food[i]/2)
        for(let j=0;j<count;j++){
            left.push(i)
            right.unshift(i)   
        }
    }
    left.push(0)
    left.push(...right)
 
    return left.join("");
}
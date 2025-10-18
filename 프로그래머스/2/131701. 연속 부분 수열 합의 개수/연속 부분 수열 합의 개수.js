function solution(elements) {
    const len= elements.length
    const sum = new Set()
    for(let i=1;i<=len;i++){
        for(let j=0;j<len;j++){
            let num=0
            for(let k=0;k<i;k++){
                num+=elements[(j+k)%len]
            }
            sum.add(num)
        }
    }
    return sum.size
}
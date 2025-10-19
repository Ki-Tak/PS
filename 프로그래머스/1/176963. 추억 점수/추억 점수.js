function solution(name, yearning, photo) {
    var answer = [];
    const nameMap = new Map()
    
    for(let i=0;i<name.length;i++){
        nameMap.set(name[i],yearning[i])
    }
    photo.forEach((people)=>{
        let sum=0
        people.forEach((person)=>{
            if(nameMap.has(person)){
                sum+=nameMap.get(person)
            }
        })
        answer.push(sum)
    })
    return answer;
}
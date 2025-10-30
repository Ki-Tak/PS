const mineralMap={
    "diamond":25,
    "iron": 5,
    "stone": 1
}
const diamond={
    "diamond":1,
    "iron":1,
    "stone":1
}
const iron={
    "diamond":5,
    "iron":1,
    "stone":1
}
const stone={
    "diamond":25,
    "iron":5,
    "stone":1
}
function solution(picks, minerals) {
    var answer = 0;
    const list=[]
    
    const maxPick = picks.reduce((acc,cur)=>acc+cur,0)*5
    const maxLength = Math.min(maxPick,minerals.length)
    
    for(let i=0;i<maxLength;i+=5){
        let item=[]
        for(let j=i;j<Math.min(i+5,maxLength);j++){
           item.push(minerals[j])
        }
        list.push(item)
    }
    list.sort((a,b)=> b.reduce((acc,cur)=>acc+mineralMap[cur],0)-a.reduce((acc,cur)=>acc+mineralMap[cur],0))
    list.forEach((item)=>{
        let pick
        if(picks[0]!==0){
            pick= diamond
            picks[0]-=1
        }
        else if(picks[1]!==0){
            pick= iron
            picks[1]-=1
        }
        else if(picks[2]!==0){
            pick= stone
            picks[2]-=1
        }
        item.forEach((mineral)=>{
            answer+=pick[mineral]
        })
    })
    return answer;
}
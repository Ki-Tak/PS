const PICKAXE = {
    "diamond": { 
        "diamond": 1, 
        "iron": 1, 
        "stone": 1 
    },
    "iron": { 
        "diamond": 5, 
        "iron": 1, 
        "stone": 1 
    },
    "stone": { 
        "diamond": 25, 
        "iron": 5, 
        "stone": 1 
    }
};

const MINERAL = { 
    "diamond": 25, 
    "iron": 5, 
    "stone": 1 
};

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
    list.sort((a,b)=> b.reduce((acc,cur)=>acc+MINERAL[cur],0)-a.reduce((acc,cur)=>acc+MINERAL[cur],0))
    
    const pickaxeType = ["diamond", "iron", "stone"];
    
    list.forEach((item)=>{
        let pick
        for (let i = 0; i < 3; i++) {
            if (picks[i] > 0) {
                pick = pickaxeType[i];
                picks[i]--;
                break;
            }
        }
        
        item.forEach((mineral)=>{
            answer+=PICKAXE[pick][mineral]
        })
    })
    return answer;
}
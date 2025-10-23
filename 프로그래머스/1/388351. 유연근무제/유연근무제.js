function solution(schedules, timelogs, startday) {
    const countMap = new Map()
    
    for(let i=0;i<7;i++){
        if((startday+i)%7===6 || (startday+i)%7===0){
            continue
        }
        else{
            timelogs.forEach((timelog,j)=>{
                let time=schedules[j]+10
                if(time%100>=60){
                    time+=40
                }
                if(time<timelog[i]){
                    if(!countMap.has(j)){
                        countMap.set(j,1)
                    }
                }
            })
        }
    }
    return schedules.length-countMap.size;
}
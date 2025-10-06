function solution(book_time) {
    var answer = 0;
    let max=-Infinity
    for(let hour=0;hour<24;hour++){
        for(let min=0;min<60;min++){
            let count=0;
            book_time.forEach((timeline)=>{
                let st= timeline[0].split(':')
                let ed= timeline[1].split(':')
                
                st= parseInt(st[0])*60+parseInt(st[1])
                ed= parseInt(ed[0])*60+parseInt(ed[1])+10
                
                if(st<=(hour*60+min) && ed>(hour*60+min)){
                    count++
                }
            })
            
            if(max<count){
                max=count
            }
        }
    }
    return max;
}

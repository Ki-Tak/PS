function formatSecond(time){
    return Number(time.split(":")[0]*60)+Number(time.split(":")[1])
}
function detectOpening(op_start,op_end,time){
    if(op_start<=time&&time<=op_end){
        return op_end
    }
    return time
}
function applyNext(video_len,time){
    if(video_len<time+10){
        return video_len
    }
    return time+10
}
function applyPrev(time){
    if(time-10<0){
        return 0
    }
    return time-10
}
function solution(video_len, pos, op_start, op_end, commands) {
    var answer = '';
    video_len= formatSecond(video_len)
    pos= formatSecond(pos)
    op_start= formatSecond(op_start)
    op_end= formatSecond(op_end)

    pos=detectOpening(op_start,op_end,pos)
    
    commands.forEach((command)=>{
        if(command==="next"){
            pos=applyNext(video_len,pos)
        }
        else if(command==="prev"){
            pos=applyPrev(pos)
        }
        pos=detectOpening(op_start,op_end,pos)
    })
    const min= Math.floor(pos/60).toString().padStart(2,'0')
    const sec= Math.floor(pos%60).toString().padStart(2,'0')
    return `${min}:${sec}`;
}
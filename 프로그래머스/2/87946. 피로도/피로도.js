function solution(k, dungeons) {
    const result= []
    
    function backTrack(visited,item,count){
        if(visited.size === dungeons.length){
            result.push(count)
            return
        }
        
        for(let i=0;i<dungeons.length;i++){
            if(!visited.has(i)){
                visited.add(i)
                
                if(dungeons[i][0]<=item){
                    backTrack(visited,item-dungeons[i][1],count+1)
                }
                else{
                    backTrack(visited,item,count)   
                }
                
                visited.delete(i)
            }
        }
        
    }
    backTrack(new Set(),k,0)
    
    return Math.max(...result);
}
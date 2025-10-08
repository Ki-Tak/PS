function isConnect(arr,row,col,rowLen,colLen,visited = new Set()){
    const key = `${row},${col}`;
    if (visited.has(key)) {
        return false;
    }
    visited.add(key);
    
    if(row<=0||row>rowLen||col<=0||col>colLen){
        return true
    }
    if(arr[col-1][row]===undefined||arr[col+1][row]===undefined||arr[col][row-1]===undefined||arr[col][row+1]===undefined){
        return true
    }
    return (arr[col+1][row] === '' && isConnect(arr, row, col+1, rowLen, colLen, visited)) ||
           (arr[col-1][row] === '' && isConnect(arr, row, col-1, rowLen, colLen, visited)) ||
           (arr[col][row+1] === '' && isConnect(arr, row+1, col, rowLen, colLen, visited)) ||
           (arr[col][row-1] === '' && isConnect(arr, row-1, col, rowLen, colLen, visited));
}
function solution(storage, requests) {
    let rowLen = storage[0].length
    let colLen = storage.length 
    
    let answer= rowLen*colLen
    
    for(let i=0;i<colLen;i++){
        storage[i]=storage[i].split('')
        storage[i].push(undefined)
        storage[i].unshift(undefined)
    }
    let undefinedArr=[]
    for(let i=0;i<rowLen+2;i++){
        undefinedArr.push(undefined)
    }
    storage.push(undefinedArr)
    storage.unshift(undefinedArr)
    
    for(let i=0;i<requests.length;i++){
        let target = requests[i][0]
        let targetIdx=[]
        
        if(requests[i].length>1){
            for(let j=1;j<=colLen;j++){
                for(let k=1;k<=rowLen;k++){
                    if(storage[j][k]===target){
                        targetIdx.push([j,k])
                    }
                }
            }       
        }
         else{
             for(let j=1;j<=colLen;j++){
                 for(let k=1;k<=rowLen;k++){
                     if(storage[j][k]===target){
                         if(isConnect(storage,k,j,rowLen,colLen)){
                            targetIdx.push([j,k])
                         }
                     }
                 }
             }
         
        }
        for(let j=0;j<targetIdx.length;j++){
            storage[targetIdx[j][0]][targetIdx[j][1]]=''
            answer--
        }
    }
       
    return answer;
}
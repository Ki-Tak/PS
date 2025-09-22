function solution(s)
{
    var answer = -1;
    let arr = []
    
    for(const i of s){
        if(arr.length>0&& arr[arr.length-1]===i){
            arr.pop()
        }
        else{
            arr.push(i)
        }
    }
    
    return arr.length === 0 ? 1:0
}
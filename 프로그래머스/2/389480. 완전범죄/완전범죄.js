function solution(info, n, m) {

    let sumN = 0;
    let sumM = 0;
    
    info.sort((a,b)=>(a[1]-b[1])-(a[0]-b[0]))
    
    for(let i=0;i<info.length;i++){
        if(sumM+info[i][1]<m){
            sumM+=info[i][1]
        }
        else if(sumN+info[i][0]<n){
            sumN+=info[i][0]
        }
        else{
            return -1
        }
    }
    
    
    return sumN;
}
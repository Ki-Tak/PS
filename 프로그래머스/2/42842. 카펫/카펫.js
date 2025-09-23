function solution(brown, yellow) {
    var answer = [];
    let total= brown + yellow
    for(let row=1;row<=brown;row++){
        for(let col=1;col<=row;col++){
            if(row*col===total&&(row-2)*(col-2)===yellow){
                answer.push(row)
                answer.push(col)
            }
        }
    }
    return answer;
}
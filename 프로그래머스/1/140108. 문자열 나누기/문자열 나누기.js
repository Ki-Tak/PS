function solution(s) {
    let count = 0;
    let xCount = 0;
    let otherCount = 0;
    let x = '';
    
    for (let i = 0; i < s.length; i++) {

        if (xCount === 0) {
            x = s[i];
            xCount++;
        } 
        else if (s[i] === x) {
            xCount++;
        } 
        else {
            otherCount++;
        }
        
        if (xCount === otherCount) {
            count++;
            xCount = 0;
            otherCount = 0;
        }
    }
    
    if (xCount > 0 || otherCount > 0) {
        count++;
    }
    
    return count;
}

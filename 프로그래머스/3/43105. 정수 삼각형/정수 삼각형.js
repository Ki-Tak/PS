function solution(triangle) {
    for(let i=1;i<triangle.length;i++){
        for(let j=0;j<triangle[i].length;j++){
            const left = triangle[i-1][j-1] ?? -Infinity;
            const right = triangle[i-1][j] ?? -Infinity;
            triangle[i][j] += Math.max(left, right);
        }
    }
    return Math.max(...triangle[triangle.length-1]);
}

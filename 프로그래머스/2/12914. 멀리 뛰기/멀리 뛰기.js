function solution(n) {
    let solution=[1,1]
    
    for(let i=2;i<=n;i++){
        solution.push((solution[i-1]+solution[i-2])%1234567)
    }
    
    return solution[n];
}

/*
1 1 1
2 2 11 2
3 3 111 12 21 
4 5 1111 112 121 211 22
5 8 11111 1112 1121 1211 2111 122 221 
6 13 111111 11112 11121 11211 12111 21111 1122 1212 1221 2112 2121 2211 222
*/
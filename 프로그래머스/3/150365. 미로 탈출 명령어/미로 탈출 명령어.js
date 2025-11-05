function solution(n, m, x, y, r, c, k) {
    let distance = Math.abs(x - r) + Math.abs(y - c);

    if (distance > k || (k - distance) % 2 === 1) {
        return "impossible";
    }
    
    let answer = "";

    for (let i = 0; i < k; i++) {
        distance = Math.abs(x - r) + Math.abs(y - c);
        if (distance < k - i) {
            if (x < n) {
                answer += "d";
                x++;
            } else if (y > 1) {
                answer += "l";
                y--;
            } else if (y < m) {
                answer += "r";
                y++;
            } else if (x > 1) {
                answer += "u";
                x--;
            }
        } else {
            if (x < r) {
                answer += "d";
                x++;
            } else if (y > c) {
                answer += "l";
                y--;
            } else if (y < c) {
                answer += "r";
                y++;
            } else {
                answer += "u";
                x--;
            }
        }
    }
    return answer;
}

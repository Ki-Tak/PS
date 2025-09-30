function solution(board) {
    let newBoard = Array(3).fill(null).map(() => Array(3).fill(''));
    let Ostring = 0;
    let Xstring = 0;
    let Onum = 0;
    let Xnum = 0;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            newBoard[i][j] = board[i].charAt(j);
            if (newBoard[i][j] === 'O') Onum++;
            else if (newBoard[i][j] === 'X') Xnum++;
        }
    }

    if (Onum < Xnum || Math.abs(Onum - Xnum) >= 2) return 0;

    for (let i = 0; i < 3; i++) {
        if (board[i] === "OOO") Ostring++;
        if (board[i] === "XXX") Xstring++;
        if (newBoard[0][i] === 'O' && newBoard[1][i] === 'O' && newBoard[2][i] === 'O') Ostring++;
        if (newBoard[0][i] === 'X' && newBoard[1][i] === 'X' && newBoard[2][i] === 'X') Xstring++;
    }

    if (newBoard[0][0] === 'O' && newBoard[1][1] === 'O' && newBoard[2][2] === 'O') Ostring++;
    if (newBoard[0][2] === 'O' && newBoard[1][1] === 'O' && newBoard[2][0] === 'O') Ostring++;
    if (newBoard[0][0] === 'X' && newBoard[1][1] === 'X' && newBoard[2][2] === 'X') Xstring++;
    if (newBoard[0][2] === 'X' && newBoard[1][1] === 'X' && newBoard[2][0] === 'X') Xstring++;

    if (Ostring > 0 && Xstring > 0) return 0;
    if (Ostring > 0 && Onum === Xnum) return 0;
    if (Xstring > 0 && Onum > Xnum) return 0;

    return 1;
}
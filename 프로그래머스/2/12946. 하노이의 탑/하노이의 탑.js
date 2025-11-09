function solution(n) {
  const move = [];

  const hanoi = (count, from, temp, to) => {
    if (count === 1) {
      move.push([from, to]);
      return;
    }
    hanoi(count - 1, from, to, temp); 
    move.push([from, to]);          
    hanoi(count - 1, temp, from, to); 
  };

  hanoi(n, 1, 2, 3);
  return move;
}

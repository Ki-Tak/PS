function solution(players, callings) {
    const nameMap = new Map();
    
    players.forEach((player, idx) => {
        nameMap.set(player, idx);
    });
    
    callings.forEach(calledPlayer => {
        const currentIdx = nameMap.get(calledPlayer);
        const frontIdx = currentIdx - 1;
        
        const frontPlayer = players[frontIdx];
        
        [players[frontIdx], players[currentIdx]] = [players[currentIdx], players[frontIdx]];
        
        nameMap.set(calledPlayer, frontIdx);
        nameMap.set(frontPlayer, currentIdx);
    });
    
    return players;
}

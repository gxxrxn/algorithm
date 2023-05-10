function solution(players, callings) {
    const playersMap = new Map();
    players.forEach(player => {
        const idx = players.indexOf(player);
        playersMap.set(player, idx);
    });
        
    callings.forEach(frontPlayer => {
        const frontPlayerIdx = playersMap.get(frontPlayer) - 1;
        const backPlayer = players[frontPlayerIdx];
        playersMap.set(frontPlayer, frontPlayerIdx);
        playersMap.set(backPlayer, frontPlayerIdx + 1);
        players[frontPlayerIdx] = frontPlayer;
        players[frontPlayerIdx + 1] = backPlayer;
    });
    
    return players;
}
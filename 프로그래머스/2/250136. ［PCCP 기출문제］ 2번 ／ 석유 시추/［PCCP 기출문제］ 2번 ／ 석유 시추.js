function labelFuel(land, startRow, startCol, maxRow, maxCol, id) {
    const queue = [[startRow, startCol]];
    land[startCol][startRow] = id;
    let count = 0;
    
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    while (queue.length > 0) {
        const [row, col] = queue.shift();
        count++;
        
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;
            
            if (newRow >= 0 && newRow < maxRow && 
                newCol >= 0 && newCol < maxCol && 
                land[newCol][newRow] === 1) {
                
                land[newCol][newRow] = id;
                queue.push([newRow, newCol]);
            }
        }
    }
    
    return count;
}

function solution(land) {
    const landRow = land[0].length;
    const landCol = land.length;
    
    let fuelLabel = 2;
    const fuelSize = {};
    
    for (let i = 0; i < landCol; i++) {
        for (let j = 0; j < landRow; j++) {
            if (land[i][j] === 1) {
                fuelSize[fuelLabel] = labelFuel(land, j, i, landRow, landCol, fuelLabel);
                fuelLabel++;
            }
        }
    }
    
    let max = 0;
    for (let i = 0; i < landRow; i++) {
        const fuelSet = new Set();
        for (let j = 0; j < landCol; j++) {
            if (land[j][i] > 1) {
                fuelSet.add(land[j][i]);
            }
        }
        
        let count = 0;
        fuelSet.forEach((fuel) => {
            count += fuelSize[fuel];
        });
        
        max = Math.max(count, max);
    }
    
    return max;
}

function solution(cacheSize, cities) {
    const cache = [];
    
    return cities.reduce((time, city, idx) => {
        let cacheTime = time;
        const lowerCity = city.toLowerCase();
        const isHit = cache.includes(lowerCity);
        
        if (isHit) {
            cacheTime += 1;
        } else {
            cacheTime += 5;
        }
        
        if (cacheSize <= 0) {
            return cacheTime;
        }
        
        if (isHit) {
            const cacheIdx = cache.indexOf(lowerCity);
            cache.splice(cacheIdx, 1);
            cache.push(lowerCity);
        } else if (cache.length < cacheSize) {
            cache.push(lowerCity);
        } else {
            cache.shift();
            cache.push(lowerCity);
        }
        
        return cacheTime;
    }, 0)
}
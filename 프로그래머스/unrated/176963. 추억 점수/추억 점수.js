function solution(name, yearning, photo) {
    const data = new Map();
    name.forEach((n, idx) => data.set(n, yearning[idx]));
    
    return photo.reduce((res, arr) => {
        res.push(arr.reduce((acc, n) => acc + (data.get(n) || 0), 0));
        return res;
    }, []);
}
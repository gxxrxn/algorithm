function solution(s, skip, index) {
    const skipList = [...skip];
    const strList = 'abcdefghijklmnopqrstuvwxyz'.split('')
                        .filter(c => skipList.indexOf(c) === -1);
    const strLength = strList.length;
    
    return [...s].reduce((acc, char) => acc + strList[(strList.indexOf(char) + index) % strLength], "");
}

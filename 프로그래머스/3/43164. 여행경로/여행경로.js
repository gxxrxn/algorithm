function solution(tickets) {
    let answer = [];
    const queue = [];
    
    tickets.forEach((ticket, idx) => {
        if (ticket[0] === "ICN") {
            queue.push({ticket, route: [...ticket], visited: [idx]});
        }
    })
    
    while(queue.length > 0) {
        const {ticket, route, visited} = queue.shift();
        const [_, dep] = ticket;
        
        if (visited.length === tickets.length) {
            if (answer.length === 0) {
                answer = [...route];
            } else {
                answer = answer.join("") > route.join("") ? route : answer;
            }
        }
        
        for (let i = 0; i < tickets.length; i += 1) {
            if (visited.includes(i)) {
                continue;
            }
            
            const [a, b] = tickets[i];
            
            if (dep === a) {
                queue.push({ticket: tickets[i], route: [...route, b], visited: [...visited, i]});
            }
        }
    }
    
    return answer;
}
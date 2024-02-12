function solution(want, number, discount) {
    let answer = 0;
    const shoppingList = want.reduce((list, item, idx) => ({...list, [item]: number[idx]}), {});
    
    for (let i = 0; i <= discount.length - 10; i += 1) {
        const cart = want.reduce((cart, item, idx) => ({...cart, [item]: 0}), {});
        let isAnswer = true;
        
        for (let j = i; j < i + 10; j += 1) {
            const discountItem = discount[j];
                        
            if (!(discountItem in shoppingList) || cart[discountItem] + 1 > shoppingList[discountItem]) {
                isAnswer = false;
                break;
            }
            
            cart[discountItem] += 1;
        }
        
        if (isAnswer) {
            answer += 1;
        }
    }
    
    return answer;
}
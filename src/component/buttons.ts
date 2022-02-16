const makeCalculateButton = (operator: '+' | '-' | '/' | '*' | '=') => {
    if(operator === '=') {
        return `<button type="button" value="${operator}" onClick="calculate${operator}()">${operator}</button>`;
    }
    return `<button type="button" value="${operator}">${operator}</button>`;
}

export {
    makeCalculateButton,
}
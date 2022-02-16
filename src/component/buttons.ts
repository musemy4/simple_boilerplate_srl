import { resultIs } from '../util';
const makeCalculateButton = (operator: '+' | '-' | '/' | '*' | '=') => {
    if(operator === '=') {
        return `<button type="button">${operator}</button>`;
    }
    return `<button type="button" id="operator">${operator}</button>`;
}

const makeCalcButton = () => {
    return `<button type="button" id="go">GO!</button>`;
}
export {
    makeCalculateButton,
    makeCalcButton
}
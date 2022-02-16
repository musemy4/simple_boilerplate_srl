// const resultIs = (input1: number, input2: number, operator: '+' | '-' | '/' | '*') => {
const resultIs = () => {
    const input1 = (<HTMLInputElement>document.getElementById('prev'));
    const input2 = (<HTMLInputElement>document.getElementById('next'));
    const operator = document.getElementById('operator');
    const result = document.getElementById('result');

    if(input1?.value === '' || input1 === undefined) {
        input1?.focus();
    }
    if(input2?.value === '' || input2 === undefined) {
        input2?.focus();
    }

    let resultNumber = 0;

    if (operator?.innerHTML === '+') {
        resultNumber = Number(input1?.value) + Number(input2?.value);
    } else if (operator?.innerHTML === '-') {
        resultNumber = Number(input1?.value) - Number(input2?.value);
    } else if (operator?.innerHTML === '/') {
        resultNumber = Number(input1?.value) / Number(input2?.value);
    } else {
        resultNumber = Number(input1?.value) * Number(input2?.value);
    }

    if(result) {
        result.innerText = resultNumber.toString();
    }
}

export {
    resultIs,
}
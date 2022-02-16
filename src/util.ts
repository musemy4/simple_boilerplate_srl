// const resultIs = (input1: number, input2: number, operator: '+' | '-' | '/' | '*') => {
const resultIs = () => {
    const input1 = document.getElementById('prev');
    const input2 = document.getElementById('next');
    const operator = document.getElementById('operator');
    const result = document.getElementById('result');

    if(input1?.innerHTML === '' || input1?.innerHTML === undefined) {
        input1?.focus();
    }
    if(input2?.innerHTML === '' || input2?.innerHTML === undefined) {
        input2?.focus();
    }

    let resultNumber = 0;
    console.log(input1?.innerHTML, input2?.innerHTML, operator?.innerHTML);
    if (operator?.innerHTML === '+') {
        resultNumber = Number(input1?.innerHTML) + Number(input2?.innerHTML);
    } else if (operator?.innerHTML === '-') {
        resultNumber = Number(input1?.innerHTML) - Number(input2?.innerHTML);
    } else if (operator?.innerHTML === '/') {
        resultNumber = Number(input1?.innerHTML) / Number(input2?.innerHTML);
    } else {
        resultNumber = Number(input1?.innerHTML) * Number(input2?.innerHTML);
    }

    console.log(resultNumber);
    
    if(result) {
        result.innerText = resultNumber.toString();
    }
}

export {
    resultIs,
}
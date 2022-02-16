import { makeCalcButton, makeCalculateButton } from './component/buttons';
import { inputEle } from './component/inputs';
import { resultIs } from './util';
import './style.css';

const drawView = () => {
    const input1 = inputEle('prev');
    const input2 = inputEle('next');
    const oper = makeCalculateButton('+');
    const resultBtn = makeCalculateButton('=');
    const resultInput = inputEle('result');
    const calcBtn = makeCalcButton();
    return input1 + oper + input2 + resultBtn + resultInput + calcBtn;
}

const AddResultListener = () => {
    const goBtn = document.getElementById('go');
    const operator = document.getElementById('operator');
    goBtn?.addEventListener("click", resultIs);
}

const rootEle = document.getElementById('root');
if (rootEle) {
    rootEle.innerHTML= drawView();
    AddResultListener();
}

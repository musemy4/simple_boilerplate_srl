import { makeCalculateButton } from './component/buttons';
import { inputEle } from './component/inputs';
import { resultIs } from './util';
import './style.css';


const rootEle = document.getElementById('root');
if(rootEle) {
    const input1 = inputEle('prev');
    const input2 = inputEle('next');
    const oper = makeCalculateButton('+');
    const resultBtn = makeCalculateButton('=');
    const resultInput = inputEle('result');
    rootEle.innerHTML= input1 + oper + input2 + resultBtn + resultInput;
}
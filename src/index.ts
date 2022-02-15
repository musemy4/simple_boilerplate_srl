import { hello, add } from './util';
import './style.css';

const text = hello('LETS CODING');
const num = add(1,2);


const rootEle = document.getElementById('root');
if(rootEle) {
    rootEle.innerHTML= text + num;
}
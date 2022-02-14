import { hello, add } from './util';
import './style.css';

const text = hello('LETS CODING');
const num = add(1,2);


document.getElementById('root').innerHTML = text + num;
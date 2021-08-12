import './style.css';
import renderHtml from './htmlStructure.js';
import { getScores, setScores } from './apiRequests.js';

const render = () => {
  renderHtml();
  getScores();
};

render();

const refreshBtn = document.querySelector('.refresh-scores');
const inputBtn = document.querySelector('#input-submit');

refreshBtn.addEventListener('click', getScores);
inputBtn.addEventListener('click', setScores);
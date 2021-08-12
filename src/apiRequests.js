/* eslint-disable no-unused-vars */
const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const newGame = async () => {
  const response = await fetch(`${requestURL}games/`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ name: 'Ping Pong' }),
  });

  const data = await response;

  return data.result;
};

const setScores = async () => {
  const nameInput = document.getElementById('name-input');
  const scoreInput = document.getElementById('score-input');
  const response = await fetch(`${requestURL}games/TV77B1L46GgUzOcqthT1/scores`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: nameInput.value,
      score: scoreInput.value,
    }),
  });

  nameInput.value = ' ';
  scoreInput.value = ' ';

  return response.json();
};

const getScores = async () => {
  const ulContainer = document.querySelector('.score-table');
  const response = await fetch(`${requestURL}games/TV77B1L46GgUzOcqthT1/scores`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  });
  const data = await response.json();

  ulContainer.innerHTML = ' ';
  data.result.forEach((element) => {
    const listItem = document.createElement('li');
    listItem.classList.add('table-item');
    listItem.innerHTML = `${element.user}: ${element.score}`;
    ulContainer.appendChild(listItem);
  });
};

export { getScores, setScores };

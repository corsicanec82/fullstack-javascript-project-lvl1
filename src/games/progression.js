import runGameEngine from '../index.js';
import { getRandom, cons } from '../utils.js';

const gameConditions = 'What number is missing in the progression?';

const lengthProgression = 10;

const getGameData = () => {
  const indexHiddenNumber = getRandom(0, lengthProgression - 1);
  const stepProgression = getRandom(2, 15);
  const firstElement = getRandom(1, 25);

  let progression = '';
  for (let i = 0; i < lengthProgression; i += 1) {
    const nextElement = i === indexHiddenNumber ? '.. ' : `${firstElement + i * stepProgression} `;
    progression = `${progression}${nextElement}`;
  }

  const question = progression;
  const answer = String(firstElement + indexHiddenNumber * stepProgression);

  return cons(question, answer);
};

export default () => {
  runGameEngine(gameConditions, getGameData);
};

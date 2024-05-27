import runGameEngine from '../index.js';
import { getRandom, cons } from '../utils.js';

export const isEven = (number) => number % 2 === 0;

const gameConditions = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const question = getRandom(10, 99);
  const answer = isEven(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => {
  runGameEngine(gameConditions, getGameData);
};

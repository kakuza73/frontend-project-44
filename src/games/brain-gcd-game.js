import getRandomFromRange from '../utils.js';
import startGame from '../index.js';

const challenge = 'Find the greatest common divisor of given numbers.';

const getGCD = (x, y) => {
  if (y === 0) return x;
  return getGCD(y, x % y);
};

const getQuestionAndAnswer = () => {
  const value1 = getRandomFromRange();
  const value2 = getRandomFromRange();
  const question = `${value1} ${value2}`;
  const correctAnswer = getGCD(value1, value2).toString();
  return [question, correctAnswer];
};

export default () => startGame(getQuestionAndAnswer, challenge);

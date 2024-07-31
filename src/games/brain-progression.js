import getRandomFromRange from '../utils.js';
import startGame from '../index.js';

const challenge = 'What number is missing in the progression?';

const getProgression = (length, step) => {
  const result = [];
  for (let i = getRandomFromRange(); result.length < length; i += step) {
    result.push(i);
  }
  return result;
};

const getQuestionAndAnswer = () => {
  const length = getRandomFromRange(5, 10);
  const step = getRandomFromRange(2, 5);
  const progression = getProgression(length, step);
  const hiddenValueIndex = getRandomFromRange(0, progression.length - 1);
  const correctAnswer = progression[hiddenValueIndex].toString();
  progression[hiddenValueIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => startGame(getQuestionAndAnswer, challenge);

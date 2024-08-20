import startGame from '../index.js';

const challenge = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getGameData = () => {
  const length = getRandomNumber(5, 10);
  const step = getRandomNumber(5, 10);
  const start = getRandomNumber(1, 100);

  const progression = getProgression(start, step, length);
  const hiddenValueIndex = getRandomNumber(0, length - 1);
  const correctAnswer = progression[hiddenValueIndex].toString();
  progression[hiddenValueIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => startGame(getGameData, challenge);

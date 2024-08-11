import startGame from '../index.js';

const challenge = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + i * step);
  }
  return result;
};

const generateNumbers = (min, max, count) => {
  const numbers = [];
  for (let i = 0; i < count; i += 1) {
    numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return numbers;
};

const getGameData = () => {
  const [length, step] = generateNumbers(5, 10, 2);
  const progressionStart = generateNumbers(1, 100, 1)[0];
  const progression = getProgression(progressionStart, step, length);
  const hiddenValueIndex = Math.floor(Math.random() * progression.length);
  const correctAnswer = progression[hiddenValueIndex].toString();
  progression[hiddenValueIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => startGame(getGameData, challenge);

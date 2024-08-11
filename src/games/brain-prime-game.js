import getRandomFromRange from '../utils.js';
import startGame from '../index.js';

const challengeDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const sqrtOfNumber = Math.sqrt(number);
  for (let divisor = 2; divisor <= sqrtOfNumber; divisor += 1) {
    if (number % divisor === 0) return false;
  }
  return number > 1;
};

const getGameData = () => {
  const question = getRandomFromRange();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => startGame(getGameData, challengeDescription);

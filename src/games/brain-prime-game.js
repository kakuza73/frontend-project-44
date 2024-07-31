import getRandomFromRange from '../utils.js'
import starGame from '../index.js';

const challenge = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2, a = Math.sqrt(num); i <= a; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const getQuestionAndAnswer = () => {
  const question = getRandomFromRange();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => starGame(getQuestionAndAnswer, challenge);

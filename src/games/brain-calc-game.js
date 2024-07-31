import getRandomFromRange from '../utils.js';
import startGame from '../index.js';

const operators = ['-', '+', '*'];
const challenge = 'What is the result of the expression?';

const getCalc = (a, b, operator) => {
  switch (operator) {
    case '-':
      return a - b;
    case '+':
      return a + b;
    case '*':
      return a * b;
    default:
      throw new Error(`Invalid expression: ${a} ${operator} ${b}`);
  }
  
};

const getQuestionAndAnswer = () => {
  const value1 = getRandomFromRange();
  const value2 = getRandomFromRange();
  const operator = operators[getRandomFromRange(0, operators.length - 1)];
  const question = `${value1} ${operator} ${value2}`;
  const correctAnswer = getCalc(value1, value2, operator).toString();
  return [question, correctAnswer];
};

export default () => startGame(getQuestionAndAnswer, challenge);
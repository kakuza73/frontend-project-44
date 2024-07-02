import { welcomeUser, runGame } from '../src/index.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const calculateExpression = (num1, operator, num2) => {
switch (operator) {
case '+':
return num1 + num2;
case '-':
return num1 - num2;
case '*':
return num1 * num2;
default:
return null;
}
};

const generateQuestion = () => {
const operators = ['+', '-', '*'];
const num1 = getRandomNumber(1, 30);
const num2 = getRandomNumber(1, 20);
const operator = operators[getRandomNumber(0, operators.length - 1)];
const question = `${num1} ${operator} ${num2}`;
const correctAnswer = calculateExpression(num1, operator, num2).toString();
return [question, correctAnswer];
};

const playGame = (name) => {
const roundsCount = 3;
const gameDescription = 'What is the result of the expression?';

runGame(name, roundsCount, gameDescription, generateQuestion);
};

welcomeUser(playGame);
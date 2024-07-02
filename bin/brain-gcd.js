import readlineSync from 'readline-sync';
import { greeting, getRandomNumber, getGCD } from '../src/index.js';

const brainGCD = () => {
const userName = greeting();
console.log('Find the greatest common divisor of given numbers.');

const roundsCount = 3;
let round = 0;

while (round < roundsCount) {
const number1 = getRandomNumber();
const number2 = getRandomNumber();
const correctAnswer = getGCD(number1, number2);

console.log(`Question: ${number1} ${number2}`);

const userAnswer = parseInt(readlineSync.question('Your answer: '), 10);

if (userAnswer !== correctAnswer) {
console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
console.log(`Let's try again, ${userName}!`);
return;
}

console.log('Correct!');
round += 1;
}

console.log(`Congratulations, ${userName}!`);
};

export default brainGCD;
import readlineSync from 'readline-sync';
import { greeting, generateProgression, hideElement } from '../src/index.js';

const brainProgression = () => {
const userName = greeting();
console.log('What number is missing in the progression?');
const roundsCount = 3;
let round = 0;

while (round < roundsCount) {
const progression = generateProgression();
const hiddenIndex = Math.floor(Math.random() * progression.length);
const correctAnswer = progression[hiddenIndex];
progression[hiddenIndex] = '..';
const question = progression.join(' ');

console.log(`Question: ${question}`);

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

export default brainProgression;
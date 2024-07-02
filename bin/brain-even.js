import readlineSync from 'readline-sync';
import { welcomeUser, getRandomNumber } from '../src/cli.js';

const isEven = (num) => num % 2 === 0;
const playGame = (name) => {
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let correctAnswersCount = 0;
while (correctAnswersCount < 3) {
const number = getRandomNumber();
console.log(`Question: ${number}`);
const userAnswer = readlineSync.question('Your answer: ');
const correctAnswer = isEven(number) ? 'yes' : 'no';
if (userAnswer !== correctAnswer) {
console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
console.log(`Let's try again, ${name}!`);
return;
}
console.log('Correct!');
correctAnswersCount += 1;
}
console.log(`Congratulations, ${name}!`);
};
welcomeUser(playGame);
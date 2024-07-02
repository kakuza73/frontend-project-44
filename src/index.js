import readlineSync from 'readline-sync';

const welcomeUser = (callback) => {
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
callback(name);
};

const runGame = (name, roundsCount, gameDescription, generateQuestion) => {
console.log(gameDescription);

for (let i = 0; i < roundsCount; i += 1) {
const [question, correctAnswer] = generateQuestion();

console.log(`Question: ${question}`);
const userAnswer = readlineSync.question('Your answer: ');

if (userAnswer !== correctAnswer) {
console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
console.log(`Let's try again, ${name}!`);
return;
}

console.log('Correct!');
}

console.log(`Congratulations, ${name}!`);
};

export { welcomeUser, runGame };







export const greeting = () => {
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
return userName;
};

export const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

export const getGCD = (a, b) => {
if (b === 0) {
return a;
}
return getGCD(b, a % b);
};
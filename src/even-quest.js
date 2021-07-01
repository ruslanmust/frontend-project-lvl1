import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandomInt = (min, max) => {
  Math.ceil(min);
  Math.floor(max);
  const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomInt;
};

const isEven = () => {
  let count = 0;

  while (count < 3) {
    const randomInt = getRandomInt(1, 50);

    readlineSync.question(`Question: ${randomInt}`);

    const answer = readlineSync.question('Your answer: ');

    const even = randomInt % 2 === 0;

    if (answer === 'yes' || answer === 'Yes') {
      if (even) {
        console.log('Correct!');
      } else {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
        console.log(`Let's try again, ${name}!`);
        break;
      }
    } else if (answer === 'no' || answer === 'No') {
      if (!even) {
        console.log('Correct!');
      } else {
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
        console.log(`Let's try again, ${name}!`);
        break;
      }
    } else {
      console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");
      break;
    }
    count += 1;
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default isEven;

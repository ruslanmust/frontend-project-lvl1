import {
  whatIsName,
  descriptionOfPrimeGame,
  getRandomInt,
  yourAnswer,
  smallestDivisor,
} from '../index.js';

const yesWords = ['yes', 'Yes', 'YES', 'yeah', 'rigth'];
const noWords = ['no', 'No', 'NO', 'nope', 'not'];

export default () => {
  const name = whatIsName();
  descriptionOfPrimeGame();
  let count = 0;

  while (count < 3) {
    const randomInt = getRandomInt(1, 500);
    const prime = smallestDivisor(randomInt);

    console.log(`Question: ${randomInt}`);
    const answer = yourAnswer();

    if (yesWords.includes(answer)) {
      if (prime) {
        console.log('Correct!');
      } else {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
        console.log(`Let's try again, ${name}!`);
        break;
      }
    } else if (noWords.includes(answer)) {
      if (!prime) {
        console.log('Correct!');
      } else {
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
        console.log(`Let's try again, ${name}!`);
        break;
      }
    } else {
      descriptionOfPrimeGame();
      break;
    }
    count += 1;
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

import {
  whatIsName,
  getRandomInt,
  descriptionOfGameEven,
  yourAnswer,
} from '../index.js';

const yesWords = ['yes', 'Yes', 'YES', 'yeah', 'rigth'];
const noWords = ['no', 'No', 'NO', 'nope', 'not'];

const isEven = () => {
  const name = whatIsName();
  descriptionOfGameEven();
  let count = 0;

  while (count < 3) {
    const randomInt = getRandomInt();
    const even = randomInt % 2 === 0;

    console.log(`Question: ${randomInt}`);
    const answer = yourAnswer();

    if (yesWords.includes(answer)) {
      if (even) {
        console.log('Correct!');
      } else {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
        console.log(`Let's try again, ${name}!`);
        break;
      }
    } else if (noWords.includes(answer)) {
      if (!even) {
        console.log('Correct!');
      } else {
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
        console.log(`Let's try again, ${name}!`);
        break;
      }
    } else {
      descriptionOfGameEven();
      break;
    }
    count += 1;
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default isEven;

import {
  whatIsName,
  descriptionOfGameNod,
  getRandomInt,
  yourAnswer,
  gcdFinder,
} from '../index.js';

const greatestCommonDivisor = () => {
  let count = 0;
  const name = whatIsName();
  descriptionOfGameNod();

  while (count < 3) {
    const a = getRandomInt(1, 50);
    const b = getRandomInt(1, 50);
    console.log(`Question: ${a} ${b}`);
    let answer = yourAnswer();
    answer = Number(answer);

    const gcd = gcdFinder(a, b);
    if (answer === gcd) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${gcd}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    count += 1;
  }

  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default greatestCommonDivisor;

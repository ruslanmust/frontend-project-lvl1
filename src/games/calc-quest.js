import {
  whatIsName, getRandomInt, descriptionOfGameCalc, yourAnswer,
} from '../index.js';

const operators = ['+', '-', '*'];

const canYouResolveIt = () => {
  const name = whatIsName();
  descriptionOfGameCalc();
  let count = 0;

  // начался цикл
  while (count < 3) {
    const a = getRandomInt();
    const b = getRandomInt();
    const randomOperator = Math.floor(Math.random() * operators.length); // генер индекс знака
    let result;
    // какой индекс из массива знака выбрать такой кейс
    switch (randomOperator) {
      case 0:
        result = a + b;
        console.log(`Question: ${a} + ${b}`);
        break;

      case 1:
        result = a - b;
        console.log(`Question: ${a} - ${b}`);
        break;

      case 2:
        result = a * b;
        console.log(`Question: ${a} * ${b}`);
        break;

        // no default
    }

    let answer = yourAnswer();
    answer = Number(answer);

    if (answer === result) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    count += 1;
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default canYouResolveIt;

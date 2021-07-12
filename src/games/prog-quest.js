import {
  whatIsName,
  descriptionOfProgGame,
  getRandomInt,
  progressiveNumbers,
  yourAnswer,
  randomIndex,
  randomElement,
} from '../index.js';

export default () => {
  let count = 0;
  const name = whatIsName();
  descriptionOfProgGame();

  while (count < 3) {
    // получаем случайный шаг для прогрессии
    const steps = [2, 3, 4, 5];
    const indexForStep = randomElement(steps);
    const startProgression = getRandomInt(1, 20);
    const progArrWithSteps = progressiveNumbers(startProgression, indexForStep);
    const randomIn = randomIndex(progArrWithSteps);
    const removedElement = progArrWithSteps.splice(randomIn, 1, '..');

    console.log(`Question: ${progArrWithSteps.join(' ')}`);
    let answer = yourAnswer();
    answer = Number(answer);

    if (answer === removedElement[0]) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${removedElement[0]}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    count += 1;
  }

  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

import readlineSync from 'readline-sync';

// приветствие
export const whatIsName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

// рандомные числа в диапазоне
export const getRandomInt = () => {
  const getRandom = (min, max) => {
    Math.ceil(min);
    Math.floor(max);
    const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomInt;
  };
  return getRandom(1, 50);
};

// описание для игры Калькулятор
export const descriptionOfGameCalc = () => {
  console.log('What is the result of the expression?');
};

// описание для игры Четное Нечетное
export const descriptionOfGameEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

// описание для игры НОД
export const descriptionOfGameNod = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

// ввод ответа и возврат
export const yourAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

// выводим нод
export const gcdFinder = (divisible, divisor) => {
  let remainder = divisible % divisor;
  let newRemainder;

  if (remainder === 0) {
    return divisor;
  }

  while (remainder !== 0) {
    newRemainder = divisor % remainder;
    if (newRemainder === 0) {
      return remainder;
    }
    remainder %= newRemainder;
  }
  return newRemainder;
};

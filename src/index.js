import readlineSync from 'readline-sync';

// приветствие
export const whatIsName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

// рандомные числа в диапазоне
export const getRandomInt = (min, max) => {
  Math.ceil(min);
  Math.floor(max);
  const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomInt;
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

// описание для игры Прогрессия
export const descriptionOfProgGame = () => {
  console.log('What number is missing in the progression?');
};

// описание для игры Простое число
export const descriptionOfPrimeGame = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
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

// случайный элемент массива
export const randomElement = (arr) => {
  const index = arr[Math.floor(Math.random() * arr.length)];
  return index;
};

// случайный индекс массива
export const randomIndex = (arr) => {
  const index = Math.floor(Math.random() * arr.length);
  return index;
};

// получаем массив для прогрессии
export const progressiveNumbers = (start, indexForStep) => {
  let count = 0;
  let firstNumber = start;
  const numbers = [];

  while (count < 10) {
    numbers.push(firstNumber);
    firstNumber += indexForStep;
    count += 1;
  }
  return numbers;
};

// проверяем простое или нет
export const smallestDivisor = (num) => {
  if (num === 1) {
    return false;
  }

  const iter = (d) => {
    if (d === num) {
      return true;
    }
    if (num % d === 0) {
      return false;
    }
    return iter(d + 1);
  };
  return iter(2);
};

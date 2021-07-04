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

export const yourAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

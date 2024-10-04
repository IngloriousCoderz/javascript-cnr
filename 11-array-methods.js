const square = (num) => num ** 2;
const isEven = (num) => num % 2 === 0;
const sum = (num1, num2) => num1 + num2;

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  const item = numbers[i];
  console.log(i, item);
}

for (const item of numbers) {
  console.log(item);
}

numbers.forEach(function (item, index, arr) {
  console.log(item, index, arr);
});

numbers.forEach((item) => console.log(item));

{
  // cortocircuitare
  numbers.forEach(console.log);
}

{
  const print = (item) => console.log(item);
  numbers.forEach(print);
}

{
  const print = (item) => console.log(item);
  numbers.forEach((item) => print(item));
}

{
  const print = (item) => console.log(item);
  const printItem = (item) => print(item);
  numbers.forEach(printItem);
}

// squares: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25]
{
  const squares = []; // inizializzazione
  numbers.forEach((item) => {
    const square = item ** 2;
    squares.push(square); // accumulo
  });
  console.log(squares); // ritorno
}

{
  const squares = numbers.map((item) => {
    return item ** 2;
  });
  console.log(squares);
}

{
  const squares = numbers.map((item) => item ** 2);
  console.log(squares);
}

{
  const squares = numbers.map(square);
  console.log(squares);
}

// evens: [1, 2, 3, 4, 5] -> [2, 4]
{
  const evens = [];
  numbers.forEach((item) => {
    if (isEven(item)) {
      evens.push(item);
    }
  });
  console.log(evens);
}

{
  const evens = numbers.filter(isEven);
  console.log(evens);
}

// firstEven: [1, 2, 3, 4, 5] -> 2
{
  let firstEven;
  for (let i = 0; firstEven == null && i < numbers.length; i++) {
    const item = numbers[i];
    if (isEven(item)) {
      firstEven = item;
    }
  }
  console.log(firstEven);
}

{
  const firstEven = numbers.find(isEven);
  console.log(firstEven);
}

// summation: [1, 2, 3, 4, 5] -> 15
{
  let summation = 0; // inizializzazione
  numbers.forEach((item) => {
    summation += item; // accumulazione
  });
  console.log(summation); // ritorno
}

{
  const [firstItem, ...rest] = numbers;
  let summation = firstItem; // inizializzazione
  rest.forEach((item) => {
    summation += item; // accumulazione
  });
  console.log(summation); // ritorno
}

{
  const summation = numbers.reduce((acc, item) => {
    acc += item;
    return acc;
  }, 0);
  console.log(summation);
}

{
  const summation = numbers.reduce((acc, item) => {
    acc += item;
    return acc;
  });
  console.log(summation);
}

{
  const summation = numbers.reduce(sum);
  console.log(summation);
}

// sumOfSquareEvens: [1, 2, 3, 4, 5] -> [2, 4] -> [4, 16] -> 20
{
  let sumOfSquareEvens = 0;
  numbers.forEach((item) => {
    if (isEven(item)) {
      const squared = square(item);
      sumOfSquareEvens += squared;
    }
  });
  console.log(sumOfSquareEvens);
}

{
  const sumOfSquareEvens = numbers.filter(isEven).map(square).reduce(sum);
  console.log(sumOfSquareEvens);
}

//               0  1  2  3  4
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// CRUD - Create, Read/Retrieve, Update, Delete

// R
const firstItem = numbers[0];
const secondItem = numbers[1];
const lastItem = numbers[numbers.length - 1];
const anotherWay = numbers.at(-1);
console.log(firstItem, secondItem, lastItem);

// C
numbers.push(6);
console.log(numbers);

numbers.unshift(-1);
console.log(numbers);

numbers.splice(2, 0, 8, 9);
console.log(numbers);

// D
numbers.pop();
console.log(numbers);

numbers.shift();
console.log(numbers);

numbers.splice(1, 2);
console.log(numbers);

// U
numbers[2] = 7;
console.log(numbers);

// Destrutturazione
{
  // const firstItem = numbers[0];
  // const secondItem = numbers[1];
  // const lastItem = numbers[numbers.length - 1];
  const [firstItem, secondItem, , , lastItem] = numbers;
  console.log(firstItem, secondItem, lastItem);

  const vector = [2, 0, 1];
  const [x, y, z] = vector;
  console.log(x, y, z);
}

// Spread operator
{
  const [, , ...remainingItems] = numbers;
  console.log(remainingItems);

  console.log(numbers.slice(2, 4));
  console.log(numbers.slice(2));
  console.log(numbers.slice(0, 3));
  console.log(numbers);

  const newNumbers = ["a", "b", ...numbers, "c", "d"];
  console.log(newNumbers);
}

// C
{
  const newNumbers = [...numbers, 8];
  console.log(numbers, newNumbers);
}

{
  const newNumbers = [8, ...numbers];
  console.log(numbers, newNumbers);
}

{
  const newNumbers = [
    //
    ...numbers.slice(0, 2),
    8,
    ...numbers.slice(2),
  ];
  console.log(numbers, newNumbers);
}

// D
{
  const newNumbers = numbers.slice(0, -1);
  console.log(numbers, newNumbers);
}

{
  const newNumbers = numbers.slice(1);
  console.log(numbers, newNumbers);
}

{
  const newNumbers = [
    //
    ...numbers.slice(0, 2),
    ...numbers.slice(3),
  ];
  console.log(numbers, newNumbers);
}

// U
{
  const newNumbers = [
    //
    ...numbers.slice(0, 2),
    3,
    ...numbers.slice(3),
  ];
  console.log(numbers, newNumbers);
}

for (let i = 0; i < numbers.length; i++) {
  console.log(i, numbers[i]);
}

for (let i in numbers) {
  console.log(i, numbers[i]);
}

delete numbers[2];
console.log(numbers, numbers.length);
numbers[2] = 3;
console.log(numbers);

for (let item of numbers) {
  console.log(item);
}

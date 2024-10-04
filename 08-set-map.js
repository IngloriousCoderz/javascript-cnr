const numbers = [1, 1, 2, 3, 4, 3, 5, 5, 6, 4, 4, 7, 8];

{
  const numbersWithoutDuplicates = [];
  for (let item of numbers) {
    if (!numbersWithoutDuplicates.includes(item)) {
      numbersWithoutDuplicates.push(item);
    }
  }
  console.log(numbersWithoutDuplicates);
}

{
  const set = new Set(numbers);
  console.log(set);

  for (let item of set) {
    console.log(item);
  }

  const numbersWithoutDuplicates = [...set];
  console.log(numbersWithoutDuplicates);
}

{
  const numbersWithoutDuplicates = [...new Set(numbers)];
  console.log(numbersWithoutDuplicates);
}

const map = new Map();
map.set(0, "Matteo Antony");
map.set(null, "Mistretta");
console.log(map.get(null));

// weak set, weak map

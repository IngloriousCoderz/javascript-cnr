const items = [{ a: 2, b: 3 }, { c: 4 }];
const clone = [...items]; // shallow copy
clone[1].d = 5;

console.log(items, clone);

const serialized = JSON.stringify(items);
console.log(serialized);
const deserialized = JSON.parse(serialized);
console.log(deserialized);

const deepClone = JSON.parse(JSON.stringify(items));
deepClone[1].d = 6;
console.log(items, deepClone);

const immutableClone = [items[0], { ...items[1], d: 6 }];
console.log(items, immutableClone);

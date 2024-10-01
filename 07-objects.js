// array associativo
const person = {
  firstName: "Matteo Antony",
  "last-name": "Mistretta",
  date_of_birth: "1982-10-17",
};
console.log(person);

// R

{
  // square bracket notation
  const firstName = person["firstName"];
  const lastName = person["last-name"];
  const dateOfBirth = person["date_of_birth"];
  console.log(firstName, lastName, dateOfBirth);
}

{
  // dot notation
  const firstName = person.firstName;
  const lastName = person["last-name"];
  const dateOfBirth = person.date_of_birth;
  console.log(firstName, lastName, dateOfBirth);
}

// C / U
person.age = 42;
console.log(person, person[0]); // person["0"] person = { "0": "qualcosa" }

// D
delete person.age;
console.log(person);

const a = 2;
console.log(a);
delete a; // dovrebbe cancellare la variabile, per qualche ragione Node non lo fa
console.log(a);

{
  const {
    firstName,
    "last-name": lastName,
    date_of_birth: dateOfBirth,
  } = person;
  console.log(firstName, lastName, dateOfBirth);
}

{
  const { firstName, ...remainingProperties } = person;
  console.log(remainingProperties);

  const newPerson = { nickname: "IceOnFire", ...person, age: 41 };
  console.log(newPerson);
}

// C
{
  const newPerson = { ...person, age: 41 };
  console.log(person, newPerson);
}

// D
{
  const { "last-name": lastName, ...newPerson } = person;
  console.log(person, newPerson);
}

// U
{
  const newPerson = { ...person, firstName: "Luca Jonathan" };
  console.log(person, newPerson);
}

for (let key in person) {
  console.log(key, person[key]);
}

const keys = Object.keys(person);
for (let key of keys) {
  console.log(key, person[key]);
}

const values = Object.values(person);
for (let value of values) {
  console.log(value);
}

const entries = Object.entries(person);
for (let entry of entries) {
  console.log(entry);
}

/*
while (cond) {
  statements...
}

inizializzazione
while (valutazione) {
  statements...
  aggiornamento
}
*/

{
  let age = 0; // inizializzazione
  while (age < 20) { // valutazione
    console.log("Play and go to school");
    age = age + 1; // aggiornamento
    // age += 1;
    // age++;
    // ++age;
  }
  console.log(age);
}

{
  for (let age = 0; age < 20; age++) {
    console.log("Play and go to school");
  }
  // console.log(age);
}

/*
do {
  statements...
} while (cond);
*/

const SECRET_NUMBER = 42;

let isGameOver = false;
while (!isGameOver) {
  const yourGuess = +prompt("Guess my number:");

  if (yourGuess > SECRET_NUMBER) {
    console.log("Too high");
  } else if (yourGuess < SECRET_NUMBER) {
    console.log("Too low");
  } else {
    console.log("Kudos!");
    isGameOver = true;
  }
}

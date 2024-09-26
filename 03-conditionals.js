/*
if (cond) {
  statements...
}
*/
let age = 71
if (age >= 70) {
  console.log("You are a senior citizen");
}

/**
 * NOT: !a
 * AND: a && b
 * OR: a || b
 * // OR ESCLUSIVO:
 * XOR: (a && !b) || (!a && b)
 * OPERATORE DI IMPLICAZIONE
 * ->: a -> b === !a || b
 * LEGGI DI DE MORGAN:
 * !(a && b) === !a || !b
 * !(a || b) === !a && !b
 */

age = 69
if (age >= 70) {
  console.log("You have the right for a pension");
} else {
  console.log("Work!");
}

if (age >= 70) {
  console.log("Boy, you're old!");
} else if (age >= 18) {
  console.log("You are an adult");
} else if (age >= 5) {
  console.log("Go to school!");
} else {
  console.log("Enjoy your youth!");
}

/* Operatore Ternario */
{
  let isOld;
  if (age >= 70) {
    isOld = true;
  } else {
    isOld = false;
  }
}

{
  const isOld = age >= 70 ? true : false;
  const isYoung = age >= 70 ? false : true;
}

{
  const isOld = age >= 70;
  const isYoung = !(age >= 70); // age < 70 // !isOld;
}

/* Switch-Case */
switch (age) {
  case 70:
    console.log("You are 70 years old");
    break;

  case 18:
    console.log("You became an adult");
    break;

  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    console.log("Go to school!");
    break;

  default:
    console.log("Enjoy your youth!");
}

const httpStatus = 200

if (httpStatus === 200 || httpStatus === 201 || httpStatus === 204) {
  console.log("Tutto ok");
} else if (httpStatus === 301 || httpStatus === 302 ||  httpStatus === 304) {
  console.log("Risorsa spostata");
} else if (httpStatus === 401 || httpStatus === 403 || httpStatus === 404 || httpStatus === 405) {
  console.log("Richiesta malformata");
} else if (httpStatus == 500 || httpStatus == 501 || httpStatus == 502) {
  console.log("Errore lato server");
}

switch (httpStatus) {
  case 200:
  case 201:
  case 204:
    console.log("Tutto ok");
    break;
  
  case 301:
  case 302:
  case 304:
    console.log("Risorsa spostata");
    break;

  case 401:
  case 403:
  case 404:
  case 405:
    console.log("Richiesta malformata");
    break;

  case 500:
  case 501:
  case 503:
    console.log("Errore lato server");
    break;
}

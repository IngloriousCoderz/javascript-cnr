const message = 'Hello "world"! <div class="text"></div>';
const anotherMessage = "Hello 'world'! Un po' come mi pare, doesn't it?";
const finalMessage = "'Hello' \"world\"!";

const language = "JavaScript";
const advantage =
  "Posso interpolare espressioni " + language.toUpperCase() + "!";
console.log(advantage);

const templateLiteral = `Primo vantaggio:
Posso andare a capo
Secondo vantaggio:
Posso "usare" i caratteri 'speciali' che mi \`pare\`
Terzo vantaggio:
Posso interpolare espressioni ${language.toUpperCase()}!`;
console.log(templateLiteral);

console.log(message);
console.log(message[0], message[1], message[message.length - 1]);

message[1] = "a";
console.log(message); // NON FUNZIONA: le stringhe sono immutabili

{
  const newMessage = message[0] + "a" + message.slice(2);
  console.log(message, newMessage);
}

{
  const [firstChar, , ...rest] = message;
  const newMessage = [firstChar, "a", ...rest].join("");
  console.log(newMessage);
}

{
  const message = "Hello world!";
  console.log(message.split(" "));
  console.log(message.split("l"));
  console.log(message.split(""));
}

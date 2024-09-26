/* function declaration */
{
  // HOISTING: posso invocare la funzione prima ancora di averla dichiarata
  console.log(sum(3, 4));

  function sum(a, b) {
    return a + b;
  }

  const result = sum(2, 3);
  console.log(result);
}

/* arrow function */
{
  // square: a -> a^2
  // sum: (a, b) -> a + b

  // NO HOISTING: non posso invocare la funzione prima di averla dichiarata
  // console.log(sum(2, 3));

  const sum = (a, b) => {
    return a + b;
  };
  // const sum = (a, b) => a + b;

  console.log(sum(2, 3));
}

function nonEseguirmi() {
  console.log("Non stamparmi");
  console.log("No davvero, non stamparmi");
  console.log("Ti prego, non farlo");
}

/* Function expression */
{
  const sum = function(a, b) {
    return a + b;
  }

  console.log(sum(2, 3))
}

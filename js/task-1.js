function makeTransaction(quantity, priceProDroid) {
  let totalPreice = quantity * priceProDroid;

  return "You ordered " + quantity + " droids worth " + totalPreice +" credits!";
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));




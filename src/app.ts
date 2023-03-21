const userName = "Aman";
// userName = "Aman";
let age = 22;

age = 23;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

const add = (a: number, b: number) => a + b;

const printOutput: (output: string | number) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

printOutput(add(5, 2));

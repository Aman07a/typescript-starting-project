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

// const add = (a: number, b: number = 1) => a + b;

// const printOutput: (output: string | number) => void = (output) =>
//   console.log(output);

// const button = document.querySelector("button");

// if (button) {
//   button.addEventListener("click", (event) => console.log(event));
// }

// printOutput(add(5));

const hobbies = ["Coding", "Gym"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

const person = {
  name: "Aman",
  age: 22,
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

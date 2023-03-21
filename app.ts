// const person: { name: string; age: number } = {
const person = {
  name: "Aman",
  age: 22,
  hobbies: ["Coding", "Gym"],
};

let favoriteActivities: string[];
favoriteActivities = ["Gym"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}
